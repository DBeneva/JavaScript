function histogram(...input) {
    let n = Number(input[0]);
    let under200 = 0;
    let from200to399 = 0;
    let from400to599 = 0;
    let from600to799 = 0;
    let above800 = 0;

    for (let i = 1; i <= n; i++) {
        let num = Number(input[i]);
        
        if (num < 200) {
            under200 += 1;
        } else if (num < 400) {
            from200to399 += 1;
        } else if (num < 600) {
            from400to599 += 1;
        } else if (num < 800) {
            from600to799 += 1;
        } else {
            above800 += 1;
        }
    }

    let p1 = under200 * 100 / n;
    let p2 = from200to399 * 100 / n;
    let p3 = from400to599 * 100 / n;
    let p4 = from600to799 * 100 / n;
    let p5 = above800 * 100 / n;

    console.log(`${p1.toFixed(2)}%`);
    console.log(`${p2.toFixed(2)}%`);
    console.log(`${p3.toFixed(2)}%`);
    console.log(`${p4.toFixed(2)}%`);
    console.log(`${p5.toFixed(2)}%`);
}

histogram(3, 1, 2, 999);