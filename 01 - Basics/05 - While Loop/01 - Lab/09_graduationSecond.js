function graduationSecond(input) {
    let name = input[0], gradeTotal = 0, years = 1;
    let expelled = 0, yearExpelled = 0;

    for (let i = 1; i < input.length; i++, years++) {
        const grade = Number(input[i]);
        gradeTotal += grade >= 4 ? grade : 0;
        expelled += grade < 4 ? 1 : 0;

        if (expelled == 2) {
            yearExpelled += years - 1;
            break;
        }
    }

    if (expelled == 2) {
        console.log(`${name} has been excluded at ${yearExpelled} grade`);
    } else {
        console.log(
            `${name} graduated. ` +
            `Average grade: ${(gradeTotal / 12).toFixed(2)}`
        );
    }
}

graduationSecond([
    'Mimi',
    5,
    6,
    5,
    6,
    5,
    6,
    6,
    2,
    3
]);