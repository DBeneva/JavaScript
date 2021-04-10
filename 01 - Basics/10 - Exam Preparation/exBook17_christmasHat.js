function christmasHat(n) {
    n = Number(n);

    //top
    let dotsNumber = n * 2 - 1;
    let dots = '.'.repeat(dotsNumber);
    console.log(dots + '/|\\' + dots);
    console.log(dots + '\\|/' + dots);

    //middle
    for (let row = 1; row <= n * 2; row++) {
        dots = '.'.repeat(dotsNumber);
        let midDashesNumber = row - 1;
        let midDashes = '-'.repeat(midDashesNumber);
        console.log(dots + '*' + midDashes + '*' + midDashes + '*' + dots);
        dotsNumber--;
    }

    //bottom
    console.log('*'.repeat(4 * n + 1));
    console.log('*' + '.*'.repeat(n * 2));
    console.log('*'.repeat(4 * n + 1));
}

christmasHat(4);