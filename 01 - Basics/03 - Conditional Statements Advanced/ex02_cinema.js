function getCinemaIncome(projection, rows, coloumns) {
    rows = Number(rows);
    coloumns = Number(coloumns);
    const seats = rows * coloumns;
    let income = 0;

    switch (projection) {
        case 'Premiere': income = seats * 12; break;
        case 'Normal': income = seats * 7.5; break;
        case 'Discount': income = seats * 5; break;
    }
    
    return income.toFixed(2) + ' leva';
}

function getCinemaIncomeObj(projection, ...rowsCols) {
    const [rows, columns] = rowsCols.map(Number);
    const seats = rows * columns;
    const ticketPrice = {
        Premiere: 12,
        Normal: 7.5,
        Discount: 5
    };

    return (seats * ticketPrice[projection]).toFixed(2) + ' leva';
}

console.log(getCinemaIncome('Discount', 12, 30));

console.log('====================');

console.log(getCinemaIncomeObj('Discount', 12, 30));