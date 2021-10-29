import { tsv2json, json2tsv } from 'tsv-json';
const csvparser = (csv) => {
    var lines = csv.split("\n");
    var result = [];
    var headers = lines[0].split(",");

    for (var i = 1; i < lines.length; i++) {
        var obj = {};

        var row = lines[i],
            queryIdx = 0,
            startValueIdx = 0,
            idx = 0;

        if (row.trim() === '') { continue; }

        while (idx < row.length) {
            /* if we meet a double quote we skip until the next one */
            var c = row[idx];

            if (c === '"') {
                do { c = row[++idx]; } while (c !== '"' && idx < row.length - 1);
            }

            if (c === ',' || /* handle end of line with no comma */ idx === row.length - 1) {
                /* we've got a value */
                var value = row.substr(startValueIdx, idx - startValueIdx).trim();

                /* skip first double quote */
                if (value[0] === '"') { value = value.substr(1); }
                /* skip last comma */
                if (value[value.length - 1] === ',') { value = value.substr(0, value.length - 1); }
                /* skip last double quote */
                if (value[value.length - 1] === '"') { value = value.substr(0, value.length - 1); }

                var key = headers[queryIdx++];
                obj[key] = value;
                startValueIdx = idx + 1;
            }

            ++idx;
        }

        result.push(obj);
    }
    return result;
}

const tsvparser = (tsv) => {
    let rows = tsv2json(tsv);

    const headers = rows[0];

    return rows.slice(1).map(row => {
        return headers.reduce((obj, nextKey, index) => {
            obj[nextKey] = row[index];
            return obj;
        }, {});
    });
}


/**
 * obtiene datos de un sheet
 * @param {String} url 
 * @param {('tvs'|'csv')} type
 * @returns data
 */
const getSheetData = async (url, type = 'tvs') => {

    const parser = type === 'tvs' ? tsvparser : csvparser;

    const data = await fetch(url).then(r => r.text());

    return parser(data);
}

// const main = async () => {
//     const test = await getSheetData('https://docs.google.com/spreadsheets/d/e/2PACX-1vQM9BaUA44uAor-GIfWyXlrElE4OD_rVR5MqP3-6njL_6MwptgpDPh6cRPqEMW14c6ZXFLboPm0yw5s/pub?output=tsv');

//     console.log(test);
// }
// main();

export { getSheetData };