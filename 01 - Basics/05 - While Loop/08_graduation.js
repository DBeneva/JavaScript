function graduation(input) {
    let name = input[0];
    let i = 1;
    let years = 1;
    let gradeTotal = 0;

    while (years <= 12) {
        let grade = Number(input[i]);
        i++;
        
        if (grade < 4) {
            continue;
        }
        
        gradeTotal += grade;
        years++;
    }

    let averageGrade = gradeTotal / 12;
    
    if (years >= 12) {
        console.log(`${name} graduated. Average grade: ${averageGrade.toFixed(2)}`);
    }
}

graduation(['Pesho', 4, 5.5, 6, 5.43, 4.5, 6, 5.55, 5, 6, 6, 5.43, 5]);