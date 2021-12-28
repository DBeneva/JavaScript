function getCinemaIncome([projection, rows, coloumns]) {
    const seats = rows * coloumns;
    const price = getPrice();
    
    console.log(`${(price * seats).toFixed(2)} leva`);

    function getPrice() {
        switch (projection) {
            case 'Premiere': return 12;
            case 'Normal': return 7.5;
            case 'Discount': return 5;
        }
    }
}

getCinemaIncome(['Discount', 12, 30]);