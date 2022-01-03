function graduation(input) {
    const name = input.shift();
    const grades = input.filter(x => x >= 4);
    const averageGrade = grades.reduce((acc, curr) => acc + curr / grades.length, 0);

    console.log(
        grades.length >= 12
            ? `${name} graduated. Average grade: ${averageGrade.toFixed(2)}`
            : ''
    );
}

graduation([
    'Pesho',
    4,
    5.5,
    6,
    5.43,
    4.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5
]);