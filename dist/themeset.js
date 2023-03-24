function themeSet(themeName) {
    let theme = document.getElementsByTagName('link')[0];
    theme.setAttribute('href', themeName);
}
// alert("This is an alert")
function setThemeOnClick() {
    let list = document.getElementById('themelist');
    let listItems = list.getElementsByTagName('li');
    [...listItems].forEach(element => {
        if ("Float" == element.innerHTML) {
            element.setAttribute('onclick', "themeSet('beerskis.css')");
        } else if ("Grid" == element.innerHTML) {
            element.setAttribute('onclick', "themeSet('beerskis-grid.css')");
        } else {
            element.setAttribute('onclick', "themeSet('beerskis-flex.css')");
        }
    });
}

window.onload = () => {
    setThemeOnClick();
}
   
/* function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
      */
      function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
        document.getElementById("content").style.marginLeft = "250px";
        document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
        document.getElementById("content").style.marginLeft = "0";
        document.body.style.backgroundColor = "white";
    }
