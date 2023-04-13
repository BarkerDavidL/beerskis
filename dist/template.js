const template = document.createElement('template');

template.innerHTML = `
<header>        
    <span onclick="openTopNav()">&#9776;</span>
    <h1>Da Beerskis Time Portal</h1>
    <a href="./pages/temp.html">About</a>

  <div class="topNav">
    <span class="closebtn" onclick="closeTopNav()">&times;</span>
    <a href="./pages/lodging.html">Lodging</a>
    <a href="./pages/beers.html">Brewpubs</a>
    <a href="./pages/packages.html">All-Inclusives</a>
    <a href="./pages/flights.html">Flights</a>
  </div>
 </header>

<footer>
<p>Beerski Travel Inc. &#169;2023</p>
</footer>
`;

document.body.appendChild(template.content);

