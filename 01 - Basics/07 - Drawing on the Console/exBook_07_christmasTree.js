function christmasTree(n) {
    n = Number(n);

    //print first line
    for (let row = 1; row <= 1; row++) {
        let line = '';

        //add spaces (1 to n + 1)
        for (let col = 1; col <= n + 1; col++) {
            line += ' ';
        }

        //add |
        line += '|';
        //print line
        console.log(line);
    }

    //print rows 1 to n
    for (let row = 1; row <= n; row++) {
        let line = '';
     
        //add spaces (1 to n - row)
        for (let col = 1; col <= n - row; col++) {
            line += ' ';
        }

        //add *s (1 to row)
        for (let col = 1; col <= row; col++) {
            line += '*';
        }

        //add ' | '
        line += ' | ';
        
        //add *s (1 to row)
        for (let col = 1; col <= row; col++) {
            line += '*';
        }

        //print line
        console.log(line);
    }
}

christmasTree(7);