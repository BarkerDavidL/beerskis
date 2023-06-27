/**
 * 
 * getAttendees - reads a JSON file and looks for a column matching the 'year'
 *                then returns a table entry for each column containing a '1'
 * 
 *                This function is called from each trip page to display the
 *                attendees for that specific trip
 * 
 *                The JSON data is generated from a csv-to-JSON converter
 *                script called csv2json.js
 * 
 * @param {string} fileurl - the URL of the JSON file containing attendee data
 * @param {string} year - the column heading of the attendee data to display
 */
function getAttendees(fileurl, trip, year) {
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
        console.log("Trip: " + trip + ", Year: " + year);
        let trip_date = trip + " " + year;
        for (let attendee of attendees) {
            console.log("attendee");
            console.log(JSON.stringify(attendee, null, 4));
            if (attendee[trip_date] == "1") {
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

let fileurl = document.currentScript.getAttribute('fileurl');
let trip = document.currentScript.getAttribute('trip');
let year = document.currentScript.getAttribute('year');

getAttendees(fileurl, trip, year);