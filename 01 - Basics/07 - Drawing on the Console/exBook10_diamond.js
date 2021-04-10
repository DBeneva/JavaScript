function diamond(n) {
    n = Number(n);

    //initialize what changes for even numbers (the upper part rows and the stars number)
    let upperRows = Math.floor(n / 2);
    let starsNumber = 1;

    if (n % 2 == 0) {
        starsNumber += 1;
        upperRows--;
    }

    let dashesNumber = (n - starsNumber) / 2;
    let stars = '*'.repeat(starsNumber);
    let dashes = '-'.repeat(dashesNumber);
    let firstLastLine = dashes + stars + dashes;
    //print first line
    console.log(firstLastLine);
    //calculate the number of the dashes in the middle
    let midDashesUpperPartNumber = 1;

    if (n % 2 == 0) {
        midDashesUpperPartNumber += 1;
    }

    for (let row = 1; row <= upperRows; row++) {
        let midDashes = '-'.repeat(midDashesUpperPartNumber);
        //calculate the number of the dashes on the side
        let dashesSideNumber = (n - midDashesUpperPartNumber - 2) / 2;
        let dashesSide = '-'.repeat(dashesSideNumber);
        //print line
        let upperLine = dashesSide + '*' + midDashes + '*' + dashesSide;
        console.log(upperLine);
        //increase the number of the dashes in the middle
        midDashesUpperPartNumber += 2;
    }

    //the lower part (1 to n - upper part rows)
    let lowerRows = upperRows - 1;
    //calculate the number of the dashes in the middle
    let midDashesLowerPartNumber = n - 4;
    
    for (let row = 1; row <= lowerRows; row++) {
        //initialize midDashes
        let midDashes = '-'.repeat(midDashesLowerPartNumber);
        //calculate the number of the dashes on the side
        let dashesSideNumber = (n - midDashesLowerPartNumber - 2) / 2;
        //initialize dashesSide
        let dashesSide = '-'.repeat(dashesSideNumber);
        //initialize line
        let lowerLine = dashesSide + '*' + midDashes + '*' + dashesSide;
        //print line
        console.log(lowerLine);
        //decrease the number of the dashes in the middle
        midDashesLowerPartNumber -= 2;
    }

    //print last line
    if (n >= 3) {
        console.log(firstLastLine);
    }
}

diamond(4);