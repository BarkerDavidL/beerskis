let template = document.createElement('template');
var path = location.pathname;
var page = path.split("/").pop();
console.log("Page = ", page);
console.log("Path = ", path);

let pathName = "";
let rootPath = "";
if (page == "index.html") {
  pathName = "/pages";
} else {
  rootPath = ".";
}
console.log("PathName = ", pathName + ", rootPath: " + rootPath);

template.innerHTML = `
<head>
<title>Da Beerskis Time Portal</title>
</head>

<header>     
    <span onclick="openTopNav()">&#9776;</span>
    <h1>Da Beerskis Time Portal</h1>
    <a href=".${pathName}/about.html">About</a>
  <div class="topNav">
    <span class="closebtn" onclick="closeTopNav()">&times;</span>
    <a href= ".${rootPath}/index.html">Home</a>
    <a href= ".${pathName}/beerski_trips.html">Beerski Trip Map</a>
    <a href= ".${pathName}/events.html">Events By Date</a>
    <a href= ".${pathName}/people.html">Events By Person</a>
    <a href=".${pathName}/ski7springs.html">7 Springs Trips</a>
    <a href=".${pathName}/wvcabins.html">WV Cabins Trips</a>
    <a href=".${pathName}/skiwest.html">Western Ski Trips</a>
    <a href= ".${pathName}/tasks.html">Tasks</a>
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

function openTopNav() {
  document.getElementsByClassName("topNav")[0].style.width = "250px";
}

function closeTopNav() {
  document.getElementsByClassName("topNav")[0].style.width = "0";
}

window.onload = function(e) {
  document.body.appendChild(template.content);
}
