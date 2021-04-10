function sumTable() {
    let lastColumn = [...document.querySelectorAll('table:nth-child(1) td:last-child')];
    
    let sum = lastColumn
        .slice(0, -1)
        .map(cell => Number(cell.textContent))
        .reduce((a, c) => a + c, 0);

    document.getElementById('sum').textContent = sum;    
}