let fileurl = "/dist/data/wv.json";
let year = "2022";

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

//getAttendees(fileurl, year);