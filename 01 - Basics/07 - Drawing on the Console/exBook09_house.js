function house(n) {
    n = Number(n);

    //upper part
    let starsNumber = 1;
    if (n % 2 == 0) {
        starsNumber++;
    }

    for (let row = 1; row <= Math.ceil(n / 2); row++) {
        let dashesNumber = (n - starsNumber) / 2;
        let dashes = '-'.repeat(dashesNumber);
        let stars = '*'.repeat(starsNumber);
        let line = dashes + stars + dashes;
        console.log(line);
        starsNumber += 2;
    }

    //lower part
    for (row = 1; row <= Math.floor(n / 2); row++) {
        let line = '|' + '*'.repeat(n - 2) + '|';
        console.log(line);
    }
}

house(9);