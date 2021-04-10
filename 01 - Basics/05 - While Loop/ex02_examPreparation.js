function examPreparation(input) {
    let poorGradesMax = Number(input[0]);
    let poorGrades = 0;
    let gradesTotal = 0;
    let numberOfProblems = 0;
    let lastProblem = '';
    let i = 1;
    let currentProblem = input[i];
    let currentProblemGrade = Number(input[i + 1]);

    while (poorGrades < poorGradesMax && currentProblem != "Enough") {
        
        if (currentProblemGrade <= 4) {
            poorGrades += 1;
        }
        
        gradesTotal += currentProblemGrade;
        numberOfProblems++;
        lastProblem = currentProblem;
        i += 2;
        currentProblem = input[i];
        currentProblemGrade = Number(input[i + 1]);
    }

    if (currentProblem == 'Enough') {
        let averageScore = gradesTotal / numberOfProblems;
        console.log(`Average score: ${averageScore.toFixed(2)}`);
        console.log(`Number of problems: ${numberOfProblems}`);
        console.log(`Last problem: ${lastProblem}`);
    } else {
        console.log(`You need a break, ${poorGrades} poor grades.`);
    }
}

examPreparation([2, 'Income', 3, 'Game Info', 6, 'Best Player', 4]);