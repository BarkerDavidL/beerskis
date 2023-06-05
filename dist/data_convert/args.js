/**
 * args
 */
import { parseArgs } from 'node:util';

export function getArgs() {
    const {values, positionals} = parseArgs ({
        options: {
            csv: {
                type: "string",
                short: "c",
            },
            json: {
                type: "string",
                short: "j",
            },
        },
    });

    return values;
}



