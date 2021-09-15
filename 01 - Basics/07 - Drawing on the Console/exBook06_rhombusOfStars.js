function rhombusOfStars(n) {
    n = Number(n);

    for (let row = 1; row <= n; row++) {
        let line = '';

        for (let col = 1; col <= n - row; col++) {
            line += ' ';
        }

        line += '*';

        for (let col = 1; col < row; col++) {
            line += ' *';
        }

        console.log(line);      
    }

    for (let row = 1; row <= n - 1; row++) {
        let line = ' ';
        
        for (let col = 1; col < row; col++) {
            line += ' ';
        }

        line += '*';
        
        for (let col = n - 2; col >= row; col--) {
            line += ' *';
        }
        
        console.log(line);
    }
}

rhombusOfStars(4);