function themeSet(themeName) {
    let theme = document.getElementsByTagName('link')[0];
    theme.setAttribute('href', themeName);
}

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
   
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
