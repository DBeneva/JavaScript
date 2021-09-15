function graduation2(input) {
    const name = input[0];
    let gradeTotal = 0;
    let years = 1;
    let expelled = 0;
    let yearExpelled = 0;
    let i = 1;

    while (years <= 12) {
        let grade = Number(input[i]);
        i++;

        if (grade < 4) {
            expelled++;

            if (expelled >= 2) {
                yearExpelled += years;
                break;
            } else {
                continue;
            }
        }

        gradeTotal += grade;
        years++;
    }

    if (expelled >= 2) {
        return `${name} has been excluded at ${yearExpelled} grade`;
    } else {
        let averageGrade = gradeTotal / 12;
        return `${name} graduated. Average grade: ${averageGrade.toFixed(2)}`;
    }
}

function graduation2Arr(input) {
    const name = input.shift();
    const expelled = input.filter(g => g < 4).length > 1;
    const yearExpelled =  expelled ? input.map((g, i) => g < 4 ? [g, i] : [g]).filter(g => g.length > 1).pop()[1] : '';
    const gradesPass = input.filter(g => g >= 4);
    const averageGrade = gradesPass.reduce((acc, curr) => acc + curr / gradesPass.length, 0);

    return expelled ?
        `${name} has been excluded at ${yearExpelled} grade` :
        `${name} graduated. Average grade: ${averageGrade.toFixed(2)}`;
}


console.log(graduation2([
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
]));

console.log('====================');

console.log(graduation2Arr([
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
]));