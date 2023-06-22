/**
 * 
 * listPerson - reads a JSON file and looks for a column matching the 'year'
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

let attendee_list = {};

function listNames(fileurl) {
    fetch(fileurl)
    .then(function(response) {
        if (!response.ok) {
            throw new Error("Fetch not OK for url: " + fileurl);
        }
        return response.json();
    })
    .then(function(attendees) {
        attendee_list = attendees;
        let name_list = document.querySelector("#person");
        let out = "";
        console.log("Starting name list");
        for (let attendee of attendees) {
            if (!["", "Name"].includes(attendee.Name)) {
                console.log(attendee.Name);
                out += `
                    <option value="${attendee.Name}">${attendee.Name}</option>
                `;
            }
        }

        name_list.innerHTML = out;
    });
}

function listPerson(person) {
        let attendee_table = document.querySelector("#attendee_output");
        let out = "";
        console.log("Starting attendee list");
        for (let attendee of attendee_list) {
            if (person == attendee.Name) {
                let trip_info = "";
                let num_events = 0;
                for (col in attendee) {
                    if (!["", "Name"].includes(col)) {
                        if ("" != attendee[col]) {
                            trip_info += `
                                <li>${col}</li>
                            `;
                            num_events += 1;
                        }
                    }
                }
                console.log(attendee.Name + ": " + num_events);
                out += `
                <div>
                    <h3>${attendee.Name}</h3>
                    <ul>
                    ${trip_info}
                    </ul>
                    <p>${num_events} trips</p>
                </div>
                `;
            }
        }

        attendee_table.innerHTML = out;
}

let fileurl = document.currentScript.getAttribute('fileurl');
let person = document.currentScript.getAttribute('person');

listNames(fileurl);