function histogram(...input) {
    let n = Number(input[0]);
    let under200 = 0;
    let from200to399 = 0;
    let from400to599 = 0;
    let from600to799 = 0;
    let above800 = 0;

    for (let i = 1; i <= n; i++) {
        const num = Number(input[i]);

        if (num < 200) {
            under200++;
        } else if (num < 400) {
            from200to399++;
        } else if (num < 600) {
            from400to599++;
        } else if (num < 800) {
            from600to799++;
        } else {
            above800++;
        }
    }

    const percentageUnder200 = under200 * 100 / n;
    const percentage200To399 = from200to399 * 100 / n;
    const percentage400To599 = from400to599 * 100 / n;
    const percentage600To799 = from600to799 * 100 / n;
    const percentageAbove800 = above800 * 100 / n;

    return `${percentageUnder200.toFixed(2)}%
${percentage200To399.toFixed(2)}%
${percentage400To599.toFixed(2)}%
${percentage600To799.toFixed(2)}%
${percentageAbove800.toFixed(2)}%`;
}

function histogramArr(...numbers) {
    numbers.map(Number);

    const n = numbers.shift();
    const percentageUnder200 = numbers.filter(x => x < 200).length / n * 100;
    const percentage200To399 = numbers.filter(x => x >= 200 && x < 400).length / n * 100;
    const percentage400To599 = numbers.filter(x => x >= 400 && x < 600).length / n * 100;
    const percentage600To799 = numbers.filter(x => x >= 600 && x < 800).length / n * 100;
    const percentageAbove800 = numbers.filter(x => x >= 800).length / n * 100;

    return `${percentageUnder200.toFixed(2)}%
${percentage200To399.toFixed(2)}%
${percentage400To599.toFixed(2)}%
${percentage600To799.toFixed(2)}%
${percentageAbove800.toFixed(2)}%`;
}

console.log(histogram(3, 1, 2, 999));

console.log('====================');

console.log(histogramArr(3, 1, 2, 999));