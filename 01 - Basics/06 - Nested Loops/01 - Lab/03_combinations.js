function combinations(n) {
    n = Number(n);
    let combinations = 0;

    for (let x = 0; x <= n; x++) {
        for (let y = 0; y <= n; y++) {
            for (let z = 0; z <= n; z++) {
                if (x + y + z == n) combinations++;
            }
        }
    }

    console.log(combinations);
}

combinations('2');