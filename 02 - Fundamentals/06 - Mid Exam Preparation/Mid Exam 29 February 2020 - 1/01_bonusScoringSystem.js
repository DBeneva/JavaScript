function bonusScoringSystem(input) {
    input = input.map(Number);
    let [numberOfStudents, lectures, additionalBonus] = input.splice(0, 3);
    let students = [];
    
    input.map(x => { 
        let student = {};
        student.bonus = x / lectures * (5 + additionalBonus);
        student.attendance = x;
        students.push(student);
    });
    
    let bestStudent = students.sort((a, b) => b.bonus - a.bonus).shift() || { bonus: 0, attendance: 0};
    
    console.log(`Max Bonus: ${Math.ceil(bestStudent.bonus)}.`);
    console.log(`The student has attended ${bestStudent.attendance} lectures.`);
}

bonusScoringSystem([0, 0, 0]);