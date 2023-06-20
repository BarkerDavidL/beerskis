/* Added by Tim May 12 to add rows of table and put # Attendees in header */
var oRows = document.getElementById('MyTable').getElementsByTagName('tr');
        var iRowCount = oRows.length-1;
        var contentHolder = document.getElementById('rowCount');
        contentHolder.innerHTML = iRowCount + " Attendees";
    /*    alert('The table has ' + iRowCount); */