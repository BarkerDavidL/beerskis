/**
 * 
 * @param {string} popupToToggle 
 * The ID string of the div to toggle. If it is hidden, this makes it visible
 * If it is visible, it will be hidden. All other divs will also be hidden.
 */
function togglePopup(popupToToggle) {
    const popupList = document.getElementsByClassName("popuptext");
    for (popup of popupList) {
        if (popup.id == popupToToggle) {
            console.log("Toggling: " + popup.id);
            popup.classList.toggle("show");
        } else {
            console.log("Turning off: " + popup.id);
            popup.classList.remove("show");
        }
    }
}
