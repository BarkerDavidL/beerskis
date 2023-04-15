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
<meta http-equiv="content-type" content="text/html; charset=UTF-8">
<meta charset="utf-8">
<meta name="author" content="Beerskis Travel Inc.">
<meta name="description" content="Travel with skiing, snowboarding beer drinking and friends">
<meta name="keywords" content="skiing,travel,brews,beer,ski,snowboard,snowboarding">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="./beerskis.css">

</head>
<header>     
    <span onclick="openTopNav()">&#9776;</span>
    <h1>Da Beerskis Time Portal</h1>
    <a href="/dist/pages/temp.html">About</a>
   <div class="topNav">
    <span class="closebtn" onclick="closeTopNav()">&times;</span>
    <a href= "/dist/index.html">Home</a>
    <a href= "/dist/pages/lodging.html">Lodging</a>
    <a href="/dist/pages/beers.html">Brewpubs</a>
    <a href="/dist/pages/packages.html">All-Inclusives</a>
    <a href="/dist/pages/lightBox.html">Beerski Trips</a>
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