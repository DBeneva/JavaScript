function examPreparation(input) {
    const poorGradesMax = Number(input.shift());
    const grades = input.filter(x => !isNaN(x) && x !== '');
    const gradesTotal = grades.reduce((a, c) => a + Number(c), 0);
    const poorGrades = grades.filter(g => g <= 4).length;

    if (poorGrades < poorGradesMax) {
        const average = gradesTotal / grades.length;

        console.log(
            `Average score: ${average.toFixed(2)}\n` +
            `Number of problems: ${grades.length}\n` +
            `Last problem: ${input[input.indexOf('Enough') - 2]}`
        );
    } else {
        console.log(`You need a break, ${poorGrades} poor grades.`);
    }
}

examPreparation([2, 'Income', 3, 'Game Info', 6, 'Best Player', 4]);
console.log('====================');
examPreparation([3, 'Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);