function grades(input) {
    let numberOfStudents = Number(input[0]);
    let numberOfGrades2 = 0;
    let numberOfGrades3 = 0;
    let numberOfGrades4 = 0;
    let numberOfGrades5 = 0;
    let gradesTotal = 0;

    for (let student = 1; student <= numberOfStudents; student++) {
        let grade = Number(input[student]);
        gradesTotal += grade;

        if (grade <= 2.99) {
            numberOfGrades2++;
        } else if (grade <= 3.99) {
            numberOfGrades3++;
        } else if (grade <= 4.99) {
            numberOfGrades4++;
        } else {
            numberOfGrades5++;
        }
    }

    let percentageGrades2 = numberOfGrades2 / numberOfStudents * 100;
    let percentageGrades3 = numberOfGrades3 / numberOfStudents * 100;
    let percentageGrades4 = numberOfGrades4 / numberOfStudents * 100;
    let percentageGrades5 = numberOfGrades5 / numberOfStudents * 100;
    let averageGrade = (gradesTotal / numberOfStudents).toFixed(2);

    console.log(`Top students: ${percentageGrades5.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${percentageGrades4.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${percentageGrades3.toFixed(2)}%`);
    console.log(`Fail: ${percentageGrades2.toFixed(2)}%`);
    console.log(`Average: ${averageGrade}`);
}

grades(['10', '3.00', '2.99', '5.68', '3.01', '4', '4', '6.00', '4.50', '2.44', '5']);