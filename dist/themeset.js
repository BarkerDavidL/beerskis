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
