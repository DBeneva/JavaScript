function generateReport() {
    let tableContentArr = [];

    let tableContent = document.querySelectorAll('tbody tr');
    let headings = Array.from(document.querySelectorAll('th input'))
        .map(x => x.name);

    for (let row of tableContent) {
        row = row.textContent
            .split('\n')
            .map(x => x.trim())
            .filter(x => x.length > 0);

        let rowObject = {};

        headings.forEach((heading, i) => {
            rowObject[heading] = row[i];
        });

        tableContentArr.push(rowObject);
    }

    let headingsChecked = Array.from(document.querySelectorAll('th input'))
        .filter(x => x.checked)
        .map(x => x.name);
    
    let rowsChecked = tableContentArr.map(row => {
        let rowChecked = {};
    
        headingsChecked.forEach(heading => {
            rowChecked[heading] = row[heading];
        });

        return rowChecked;
    });

    let result = JSON.stringify(rowsChecked, null, 2);
    document.getElementById('output').textContent = result;
}