const template = document.createElement('template');

template.innerHTML = `
<header>        
<span onclick="openNav()">&#9776;</span>
<h1>Dave and Tim Adventures</h1>
<a href="./pages/temp.html">About</a>

<div class="sidenav">
<span class="closebtn" onclick="closeNav()">&times;</span>
<a href="./pages/lodging.html">Lodging</a>
<a href="./pages/beers.html">Brewpubs</a>
<a href="./pages/packages.html">All-Inclusives</a>
<a href="./pages/flights.html">Flights</a>
</div>
<div>
    <span class="breadcrumbs">
    <a href="../index.html">Home</a> ->
    </span>
</div>
</header>
<footer>
<p>Beerski Travel Inc. &#169;2023</p>
</footer>
`;

document.body.appendChild(template.content);