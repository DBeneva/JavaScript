function squareOfStars(n) {
    n = Number(n);

    for (let i = 0; i < n; i++) {
        let stars = '*';

        for (let j = 1; j < n; j++) {
            stars += ' *';
        }

        console.log(stars);
    }
}

squareOfStars(4);