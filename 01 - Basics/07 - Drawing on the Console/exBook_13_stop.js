function stop(n) {
    n = Number(n);

    //first line
    let dots = n + 1;
    let underscores = n * 2 + 1;
    let firstLine = '.'.repeat(dots) + '_'.repeat(underscores) + '.'.repeat(dots);
    console.log(firstLine);
    //upper part
    underscores -= 2;
    
    for (let row = 1; row <= n + 1; row++) {
        dots--;
        let line = '.'.repeat(dots) + '//' + '_'.repeat(underscores) + '\\\\' + '.'.repeat(dots);
        
        if (row == n + 1) {
            line = '//' + '_'.repeat((underscores - 5) / 2) + 'STOP!' + '_'.repeat((underscores - 5) / 2) + '\\\\';
        }

        console.log(line);
        underscores += 2;
    }

    //lower part
    dots = 0;
    underscores = (n * 4 - 1);
    
    for (let row = 1; row <= n; row++) {
        let line = '.'.repeat(dots) + '\\\\' + '_'.repeat(underscores) + '//' + '.'.repeat(dots);
        console.log(line);
        dots++;
        underscores -= 2;
    }
}

stop(6);