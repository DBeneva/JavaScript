function rectangleOfNByNStars(n) {
    n = Number(n);

    for (let i = 1; i <= n; i++) {
        console.log('*'.repeat(n));
    }
}

rectangleOfNByNStars(2);