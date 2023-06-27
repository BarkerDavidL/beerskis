/**
 * csv2json - reads a CSV file and write out an equivalent JSON file
 * 
 * e.g. node csv2json --csv ./data/wv.csv --json ./data/wv.json
 * 
 */
import * as fs from 'fs';

import {getArgs} from "./args.js";

let args = getArgs();

let filename = args["csv"];
let json_filename = args["json"];

console.log(filename);
console.log(json_filename);

/**
 * 
 * @param {string} csv - a string containing the entire csv input
 * @param {string} delim - a string that is used to delimit items in a csv file, default ','
 * @returns 
 */
function csv2json(csv, delim=",") {
    let headers = csv.slice(0, csv.indexOf('\n')).trim().split(delim);
    let restoffile = csv.slice(csv.indexOf('\n') + 1);
    let locations = restoffile.slice(0, restoffile.indexOf('\n')).trim().split(delim);

    let rows = restoffile.split('\n');
    let json = rows.map(row => {
        let values=row.trim().split(delim);
        console.log(values);
        console.log("headers");
        console.log(headers);
        console.log("Locations");
        console.log(locations);
        return headers.reduce(
            (obj, title, index) => {
                //console.log("title: " + title + ", index: " + index + ", obj: " + obj[title]);
                let key = "" == locations[index] ? title : locations[index] + " " + title;
                console.log("key: " + key);
                return ((obj[key] = values[index]), obj);
            },
            {}
        );
    });
    console.log("MAP RESULT");
    //console.log(json);
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

