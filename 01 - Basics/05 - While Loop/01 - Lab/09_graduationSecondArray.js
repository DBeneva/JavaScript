function graduationSecond(input) {
    const name = input.shift();
    const expelled = input.filter(g => g < 4).length > 1;
    const yearExpelled = expelled ? input.map((g, i) => g < 4 ? [g, i] : [g]).filter(g => g.length > 1).pop()[1] : '';
    const grades = input.filter(g => g >= 4);
    const averageGrade = grades.reduce((acc, curr) => acc + curr / grades.length, 0);

    console.log(
        expelled
        ? `${name} has been excluded at ${yearExpelled} grade`
        : `${name} graduated. Average grade: ${averageGrade.toFixed(2)}`
    );
}

graduationSecond([
    'Gosho',
    5,
    5.5,
    6,
    5.43,
    5.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5
]);