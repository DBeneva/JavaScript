function cinema(projection, rows, coloumns) {
    rows = Number(rows);
    coloumns = Number(coloumns);
    let seats = rows * coloumns;
    let income = 0;

    switch (projection) {
        case 'Premiere': income = seats * 12; break;
        case 'Normal': income = seats * 7.5; break;
        case 'Discount': income = seats * 5; break;
    }
    
    console.log(income.toFixed(2) + ' leva');
}

cinema('Discount', 12, 30);