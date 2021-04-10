function axe(n) {
    n = Number(n);

    let width = n * 5;
    let upperRows = n;
    let dashesNumber = n * 3;
    let dashes = '-'.repeat(dashesNumber);
    let midDashesNumber = 0;
    let dashesRightNumber;

    for (let row = 1; row <= upperRows; row++) {
        let midDashes = '-'.repeat(midDashesNumber);
        dashesRightNumber = width - dashesNumber - 2 - midDashesNumber;
        let dashesRight = '-'.repeat(dashesRightNumber);
        let line = dashes + '*' + midDashes + '*' + dashesRight;
        console.log(line);
        midDashesNumber++;
    }

    let midRows = Math.floor(n / 2);
    let starNumber = n * 3 + 1;
    let stars = '*'.repeat(starNumber);
    midDashesNumber--;

    for (let row = 1; row <= midRows; row++) {
        let midDashes = '-'.repeat(midDashesNumber);
        let dashesRight = '-'.repeat(dashesRightNumber);
        let line = stars + midDashes + '*' + dashesRight;
        console.log(line);
    }

    for (let row = 1; row <= midRows; row++) {
        let midDashes = '-'.repeat(midDashesNumber);
        let dashesRight = '-'.repeat(dashesRightNumber);
        let dashes = '-'.repeat(dashesNumber);
        let line = dashes + '*' + midDashes + '*' + dashesRight;
        
        if (row == midRows) {
            line = dashes + '*'.repeat(midDashesNumber + 2) + dashesRight;
        }

        console.log(line);
        dashesNumber--;
        midDashesNumber += 2;
        dashesRightNumber--;        
    }
}

axe(5);