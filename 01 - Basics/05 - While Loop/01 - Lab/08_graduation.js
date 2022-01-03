function graduation(input) {
    let name = input[0], gradesTotal = 0, years = 1;

    for (let i = 1; i < input.length; i++, years++) {
        gradesTotal += Number(input[i]) >= 4 ? Number(input[i]) : 0;
    }

    if (years >= 12) {
        console.log(
            `${name} graduated. ` +
            `Average grade: ${(gradesTotal / 12).toFixed(2)}`
        );
    }
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