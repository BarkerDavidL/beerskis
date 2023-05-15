const fs = require('fs');

let filename = "data/wv.csv";
let json_filename = "data/wv.json";

function csv2json(csv, delim=",") {
    let headers = csv.slice(0, csv.indexOf('\n')).trim().split(delim);
    let restoffile = csv.slice(csv.indexOf('\n') + 1);

    let rows = restoffile.split('\n');
    let json = rows.map(row => {
        let values=row.trim().split(delim);
        return headers.reduce(
            (obj, title, index) => ((obj[title] = values[index]), obj),
            {}
        );
    });
    return JSON.stringify(json);
}

function write_json_file(json_filename, json_text) {
    console.log("writing json_file: " + json_filename);
    fs.writeFile(
        json_filename,
        json_text,
        {
            encoding: "utf8",
            flag: "w",
            mode: 0o664
        },
        (err) => {
            if (err) {
                console.log("Error writing file to: " + json_filename + ": " + err);
            } else {
                console.log("File written successfully");
            }
        });
}

new Promise(
    function(res, rej) {
        fs.readFile(
            filename,
            'utf8',
            (err, data) => {
                if (err) {
                    rej("cannot read file");
                } else {
                    let json_text = csv2json(data);
                    res(json_text);
                }
            }
        );
    }
).then(
    (json_text) => {
        write_json_file(json_filename, json_text);
    },
    (error) => console.log("GET FAILED: " + error)
);

