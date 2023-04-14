const template = document.createElement('template');
var path = window.location.pathname;
var page = path.split("/").pop();
console.log(page);
var pathName = "./pages/"

template.innerHTML = `
<header>     
    <span onclick="openTopNav()">&#9776;</span>
    <h1>Da Beerskis Time Portal</h1>
    <a href="./pages/temp.html">About</a>

  <div class="topNav">
    <span class="closebtn" onclick="closeTopNav()">&times;</span>
    
    <a href= "${pathName}lodging.html">Lodging</a>
    <a href="/dist/pages/beers.html">Brewpubs</a>
    <a href="/dist/pages/packages.html">All-Inclusives</a>
    <a href="/dist/pages/flights.html">Flights</a>
  </div>
 </header>
`;

document.body.appendChild(template.content);

function loadNav(relDir) {
  nav = getElementByTagName("nav")[0];
  if (nav) {

  }
}

function loadFooter() {
  footer = document.getElementsByTagName("footer")[0];
  if (footer) {
    footer.innerHTML = "<p>Beerski Travel Inc. &#169;2023</p>";
  }
}

loadFooter();
