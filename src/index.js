const parseQuery = require('../src/queryParser');
const readCSV = require('../src/csvReader');

async function executeSELECTQuery(query) {
    const { fields, table } = parseQuery(query);
    const data = await readCSV(`../../src/sample.csv`);  // replaced ${table} with file path 
    
    // Filter the fields based on the query
    return data.map(row => {
        const filteredRow = {};
        fields.forEach(field => {
            filteredRow[field] = row[field];
        });
        return filteredRow;
    });
}

module.exports = executeSELECTQuery;