function histogram(input) {
    const n = Number(input[0]);
    let under200 = 0, under400 = 0, under600 = 0, under800 = 0, above800 = 0;

    for (let i = 1; i <= n; i++) {
        const num = Number(input[i]);

        if (num < 200) under200++;
        else if (num < 400) under400++;
        else if (num < 600) under600++;
        else if (num < 800) under800++;
        else above800++;
    }

    console.log(
        `${(under200 * 100 / n).toFixed(2)}%\n` +
        `${(under400 * 100 / n).toFixed(2)}%\n` +
        `${(under600 * 100 / n).toFixed(2)}%\n` +
        `${(under800 * 100 / n).toFixed(2)}%\n` +
        `${(above800 * 100 / n).toFixed(2)}%`
    );
}

histogram([3, 1, 2, 999]);