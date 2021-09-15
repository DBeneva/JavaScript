function trainTheTrainers(input) {
    let index = 0;
    let juryMembers = Number(input[index]);
    index++;
    let assignmentName = input[index];
    index++;
    let numberOfAssignments = 0;
    let gradesPerStudent = 0;
    let gradesPerStudentSum = 0;

    while (assignmentName != 'Finish') {
        let gradeAssignment = 0;

        for (let gradesPerAssignment = 1; gradesPerAssignment <= juryMembers; gradesPerAssignment++) {
            gradeAssignment += Number(input[index]);
            index++;
            gradesPerStudent++;
        }
        
        gradesPerStudentSum += gradeAssignment;
        console.log(`${assignmentName} - ${(gradeAssignment / juryMembers).toFixed(2)}.`);
        assignmentName = input[index];
        index++;
        numberOfAssignments++;
    }

    console.log(`Student's final assessment is ${(gradesPerStudentSum / gradesPerStudent).toFixed(2)}.`);
}

trainTheTrainers(['2', 'Objects and Classes', '5.77', '4.23', 'Dictionaries',
    '4.62', '5.02', 'RegEx', '2.88', '3.42', 'Finish']);