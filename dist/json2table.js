/**
 * 
 * getAttendees - reads a JSON file and looks for a column matching the 'year'
 *                then returns a table entry for each column containing a '1'
 * 
 * @param {string} fileurl - the URL of the JSON file containing attendee data
 * @param {string} year - the column heading of the attendee data to display
 */
function getAttendees(fileurl, year) {
    fetch(fileurl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Fetch not OK for url: " + fileurl);
        }
        return response.json();
    })
    .then(function(attendees) {
        let attendee_table = document.querySelector("#attendee_output");
        let out = "";
        let attendee_count = 0;
        console.log("Year: " + year);
        for (let attendee of attendees) {
            if (attendee[year] == "1") {
                out += `
                <tr>
                    <td>${attendee.Name}</td>
                </tr>
                `;
                attendee_count += 1;
            }
        }

        attendee_table.innerHTML = out;
        document.getElementById('rowCount').innerHTML = attendee_count + " Attendees";
    });
}

//let fileurl = "/dist/data/wv.json";
//let year = "2022";
//getAttendees(fileurl, year);