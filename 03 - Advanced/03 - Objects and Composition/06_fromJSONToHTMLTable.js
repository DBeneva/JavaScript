function fromJSONToHTMLTable(input) {
    let parsedObjects = JSON.parse(input);
    let properties = Object.keys(parsedObjects[0]);
    let table = ['<table>'];
    table.push(makeTableHeading(properties));
    parsedObjects.forEach(object => table.push(makeTableRow(object)));
    table.push('</table>');

    function makeTableHeading(properties) {
        let header = properties.map(title => `<th>${title}</th>`).join('');
        return `  <tr>${header}</tr>`;
    }

    function makeTableRow(object) {
        let row = Object.values(object)
            .map(value => `<td>${isNaN(value) ? escapeSymbols(value) : value}</td>`)
            .join('');
        return `  <tr>${row}</tr>`;
    }

    function escapeSymbols(text) {
        return text
            .split('&').join('&amp;')
            .split('<').join('&lt;')
            .split('>').join('&gt;')
            .split('\"').join('&quot;')
            .split('\'').join('&#39;');
    }

    return table.join('\n');
}

console.log(fromJSONToHTMLTable('[{"Name":"Pe&sho","Score":4," Grade":8},{"Name":"Gosho","Score":5," Grade":8},{"Name":"Angel","Score":5.50," Grade":10}]'
));