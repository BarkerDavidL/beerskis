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
        console.log("Year: " + year);
        for (let attendee of attendees) {
            if (attendee[year] == "1") {
                out += `
                <tr>
                    <td>${attendee.Name}</td>
                </tr>
                `;
            }
        }

        attendee_table.innerHTML = out;
    });
}

//getAttendees(fileurl, year);