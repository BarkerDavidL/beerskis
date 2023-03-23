function themeSet(themeName) {
    let theme = document.getElementsByTagName('link')[0];
    console.log("setting theme to "+themeName);
    theme.setAttribute('href', themeName);
}
alert("This is an alert")
function setThemeOnClick() {
    let list = document.getElementById('themelist');
    console.log("list is: "+list+":");
    let listItems = list.getElementsByTagName('li');
    console.log("listItems are: "+listItems+":");
    [...listItems].forEach(element => {
        console.log("adding onclick for "+element.value+", innerHTML: "+element.innerHTML);
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
    console.log("Window has loaded");
    setThemeOnClick();
}
   
function openNav() {
        document.getElementById("mySidenav").style.width = "250px";
      }
function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
      }
