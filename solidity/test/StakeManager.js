const StakeManager = artifacts.require("./StakeManager.sol");
const TicTacToe = artifacts.require('./TicTacToeResolver.sol');

const util = require('ethereumjs-util');

contract('Stake Manager', async (accounts) => {

  it("Mega test", async () => {

    const stakeManager = await StakeManager.deployed();

    const ticTacToe = await TicTacToe.deployed();

    await stakeManager.addResolver("TicTacToeResolver", ticTacToe.address);

    const user1 = accounts[0];
    const user2 = accounts[1];

    const openChannel = await stakeManager.openChannel(0, {from: user1});
    const joinChannel = await stakeManager.joinChannel(0, {from: user2});

    const state1 = '000100000310';//'0x1112000000'
    const state2 = '002120200220';

    const hashedState1 = util.sha3(state1);
    const hashedState2 = util.sha3(state2);

    console.log('Address of first user: ', user1, 'Address of seconds user: ', user2);

    const privateKeys = [
        '0xc87509a1c067bbde78beb793e6fa76530b6382a4c0241e5e4a9ec0a0f44dc0d3',
        '0xae6ae8e5ccbfb04590405997ee2d52d2b330726137b875053c36d94e974d162f'
    ];

    const sig1 = util.ecsign(hashedState1, util.toBuffer(privateKeys[0]));
    const sig2 = util.ecsign(hashedState2, util.toBuffer(privateKeys[1]));


    try {
        const tx = await stakeManager.fastClose(
        0,
        [util.bufferToHex(hashedState1), util.bufferToHex(hashedState2)],
        [util.bufferToInt(sig1.v), util.bufferToInt(sig2.v)],
        [util.bufferToHex(sig1.r), util.bufferToHex(sig2.r)],
        [util.bufferToHex(sig1.s), util.bufferToHex(sig2.s)],
        util.bufferToHex(util.toBuffer(state1)),
        util.bufferToHex(util.toBuffer(state2)),
        {from: user1});

        console.log(tx.logs[0]);
        } catch(err) {
            console.log(err);
        }

        const channel = await stakeManager.channels(0);

        console.log(channel);

        // const resolve = await ticTacToe.resolve(util.bufferToHex(util.toBuffer(state1)), util.bufferToHex(util.toBuffer(state2)), {from: user1});

        // console.log(resolve[0]*1, resolve[1]*1);

  });




});