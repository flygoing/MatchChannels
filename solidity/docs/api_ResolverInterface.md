---
id: ResolverInterface
title: ResolverInterface
---

<div class="contract-doc"><div class="contract"><h2 class="contract-header"><span class="contract-kind">interface</span> ResolverInterface</h2><div class="source">Source: <a href="git+https://github.com/DecenterApps/MatchChannels/blob/v1.0.0/contracts/ResolverInterface.sol" target="_blank">ResolverInterface.sol</a></div></div><div class="index"><h2>Index</h2><ul><li><a href="ResolverInterface.html#getSequence">getSequence</a></li><li><a href="ResolverInterface.html#isWinner">isWinner</a></li><li><a href="ResolverInterface.html#resolve">resolve</a></li></ul></div><div class="reference"><h2>Reference</h2><div class="functions"><h3>Functions</h3><ul><li><div class="item function"><span id="getSequence" class="anchor-marker"></span><h4 class="name">getSequence</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>getSequence</strong><span>(bytes _state) </span><span>external </span><span>view </span><span>returns  (uint) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_state</code> - bytes</div></dd><dt><span class="label-return">Returns:</span></dt><dd>uint</dd></dl></div></div></li><li><div class="item function"><span id="isWinner" class="anchor-marker"></span><h4 class="name">isWinner</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>isWinner</strong><span>(bytes _currState, uint _w) </span><span>external </span><span>pure </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_currState</code> - bytes</div><div><code>_w</code> - uint</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li><li><div class="item function"><span id="resolve" class="anchor-marker"></span><h4 class="name">resolve</h4><div class="body"><code class="signature"><span>abstract </span>function <strong>resolve</strong><span>(bytes _previous, bytes _current) </span><span>external </span><span>pure </span><span>returns  (bool) </span></code><hr/><dl><dt><span class="label-parameters">Parameters:</span></dt><dd><div><code>_previous</code> - bytes</div><div><code>_current</code> - bytes</div></dd><dt><span class="label-return">Returns:</span></dt><dd>bool</dd></dl></div></div></li></ul></div></div></div>