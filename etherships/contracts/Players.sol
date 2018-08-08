pragma solidity ^0.4.24;


contract Players {

    struct Player {
        string username;
        uint128 balance;
        uint64 gamesPlayed;
        uint64 finishedGames;
    }

    mapping(address => Player) public players;

    event NewPlayer(address indexed player, string username, uint128 balance);
    event AccountFunded(address indexed player, uint128 value);
    event Withdraw(address indexed player, uint128 amount);

    function createAccount(string _username) public payable {
        require(bytes(_username).length > 0);
        require(bytes(players[msg.sender].username).length == 0);
        players[msg.sender] = Player({
            username: _username,
            balance: uint128(msg.value),
            gamesPlayed: 0,
            finishedGames: 0
        });

        emit NewPlayer(msg.sender, _username, uint128(msg.value));
    }

    function fundAccount() public payable {
        require(bytes(players[msg.sender].username).length > 0);

        players[msg.sender].balance += uint128(msg.value);

        emit AccountFunded(msg.sender, uint128(msg.value));
    }

    function withdraw(uint128 _amount) public {
        require(bytes(players[msg.sender].username).length > 0);
        require(players[msg.sender].balance >= _amount);

        players[msg.sender].balance -= _amount;
        msg.sender.transfer(_amount);

        emit Withdraw(msg.sender, uint128(_amount));
    }

}
