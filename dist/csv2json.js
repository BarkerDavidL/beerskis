/**
 * csv2json - reads a CSV file and write out an equivalent JSON file
 */
const fs = require('fs');

//let filename = "data/western.csv";
//let json_filename = "data/western.json";
let filename = "data/7springs.csv";
let json_filename = "data/7springs.json";

/**
 * 
 * @param {string} csv - a string containing the entire csv input
 * @param {string} delim - a string that is used to delimit items in a csv file, default ','
 * @returns 
 */
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

/**
 * 
 * @param {string} json_filename - the filename of the JSON output file
 * @param {string} json_text - the string containing all of the JSON data
 */
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

