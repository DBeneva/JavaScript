function butterfly(n) {
    n = Number(n);
    let num = n - 2;
    let line = '';

    for (let row = 1; row <= num; row++) {
        if (row % 2 == 1) {
            line = '*'.repeat(num) + '\\ /' + '*'.repeat(num);
        } else {
            line = '-'.repeat(num) + '\\ /' + '-'.repeat(num);
        }

        console.log(line);
    }

    let midLine = ' '.repeat(num + 1) + '@';
    console.log(midLine);
    
    for (let row = 1; row <= num; row++) {
        if (row % 2 == 1) {
            line = '*'.repeat(num) + '/ \\' + '*'.repeat(num);
        } else {
            line = '-'.repeat(num) + '/ \\' + '-'.repeat(num);
        }

        console.log(line);
    }
}

butterfly(3);