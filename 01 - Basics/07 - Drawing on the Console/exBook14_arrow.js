function arrow(n) {
    n = Number(n);

    //first line
    let width = n * 2 - 1;
    let dotsNumber = (width - n) / 2;
    let dots = '.'.repeat(dotsNumber);
    let middle = n - 2;
    let midDots = '.'.repeat(middle);
    let firstLine = dots + '#'.repeat(n) + dots;
    console.log(firstLine);
    
    //upper part
    let rows = n - 2;
    
    for (let row = 1; row <= rows; row++) {
        let line = dots + '#' + midDots + '#' + dots;
        console.log(line);
    }

    //middle line
    let midLine = '#'.repeat((n + 1) / 2) + midDots + '#'.repeat((n + 1) / 2);
    console.log(midLine);
    
    //lower part
    let dotsNumberBottom = 1;
    let lineBottom = '';

    for (let row = 1; row <= n - 1; row++) {
        let midBottom = width - 2 * dotsNumberBottom - 2;

        if (midBottom < 1) {
            lineBottom = '.'.repeat(dotsNumberBottom) + '#' + '.'.repeat(dotsNumberBottom);
        } else {
        lineBottom = '.'.repeat(dotsNumberBottom) + '#' + '.'.repeat(midBottom) + '#' + '.'.repeat(dotsNumberBottom);
        }

        console.log(lineBottom);
        dotsNumberBottom++;
    }
}

arrow(7);