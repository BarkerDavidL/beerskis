let template = document.createElement('template');
var path = location.pathname;
var page = path.split("/").pop();
console.log("Page = ", page);
console.log("Path = ", path);
if (page="index.html") {
  var pathName = ""; }
else {var pathName = "";}
console.log("PathName = ", pathName);


template.innerHTML = `
<head>
<title>Da Beerskis Time Portal</title>
<link rel="stylesheet" href="/dist/beerskis.css">
</head>

<header>     
    <span onclick="openTopNav()">&#9776;</span>
    <h1>Da Beerskis Time Portal</h1>
    <a href="/dist/pages/temp.html">About</a>
  <div class="topNav">
    <span class="closebtn" onclick="closeTopNav()">&times;</span>
    <a href= "/dist/index.html">Home</a>
    <a href= "/dist/pages/beerski_trips.html">Beerski Trip Map</a>
    <a href="/dist/pages/ski7springs.html">7 Springs Trips</a>
    <a href="/dist/pages/wvharmans.html">WV Cabins Trips</a>
    <a href="/dist/pages/skiwest.html">Western Ski Trips</a>
    <a href= "/dist/pages/tasks.html">Tasks</a>
  </div>
</header>
<footer>
  <p>&#169; Beerskis Travel, Inc. 2023</p>
</footer>
`;

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

function openNav() {
  document.getElementsByClassName("sidenav")[0].style.width = "250px";
  //document.getElementById("content").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeNav() {
  document.getElementsByClassName("sidenav")[0].style.width = "0";
  //document.getElementById("content").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}
function openTopNav() {
  document.getElementsByClassName("topNav")[0].style.width = "250px";
  //document.getElementById("content").style.marginLeft = "250px";
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
}

function closeTopNav() {
  document.getElementsByClassName("topNav")[0].style.width = "0";
  //document.getElementById("content").style.marginLeft = "0";
  document.body.style.backgroundColor = "white";
}

window.onload = function(e) {
  document.body.appendChild(template.content);
}