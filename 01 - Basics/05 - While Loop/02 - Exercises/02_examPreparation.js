function examPreparation(input) {
    const poorGradesMax = Number(input[0]);
    let poorGrades = 0, gradesTotal = 0, problem = '';
    
    for (let i = 1; poorGrades < poorGradesMax && input[i] != 'Enough'; i += 2) {
        problem = input[i];
        const currentGrade = Number(input[i + 1]);
        gradesTotal += currentGrade;
        poorGrades += currentGrade <= 4 ? 1: 0;
    }

    if (poorGrades < poorGradesMax) {
        const problems = (input.length - 2) / 2;
        const averageScore = gradesTotal / problems;

        console.log(
            `Average score: ${averageScore.toFixed(2)}\n` +
            `Number of problems: ${problems}\n` +
            `Last problem: ${problem}`
        );
    } else {
        console.log(`You need a break, ${poorGrades} poor grades.`);
    }
}

examPreparation([2, 'Income', 3, 'Game Info', 6, 'Best Player', 4]);
console.log('====================');
examPreparation([3, 'Money', 6, 'Story', 4, 'Spring Time', 5, 'Bus', 6, 'Enough']);