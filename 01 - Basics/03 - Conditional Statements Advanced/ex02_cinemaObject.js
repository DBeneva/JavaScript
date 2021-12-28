function getCinemaIncome([projection, rows, columns]) {
    const seats = rows * columns;
    const ticketPrice = {
        Premiere: 12,
        Normal: 7.5,
        Discount: 5
    };

    console.log(`${(seats * ticketPrice[projection]).toFixed(2)} leva`);
}

getCinemaIncome(['Discount', 12, 30]);