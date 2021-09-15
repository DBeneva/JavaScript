function schoolGrades(input) {
    let listOfGrades = new Map();

    for (let line of input) {
        line = line.split(' ');
        let student = line.shift();
        let grades = listOfGrades.has(student) ?
            listOfGrades.get(student).concat(line.map(Number)) :
            line.map(Number);
        listOfGrades.set(student, grades);
    }

    let compareAverage = (a, b) => average(a[1]) - average(b[1]);
    let sortedList = [...listOfGrades].sort(compareAverage);

    for (let [student, grades] of sortedList) {
        console.log(`${student}: ${grades.join(', ')}`);
    }


    function average(array) {
        return array.reduce((a, b) => a + b, 0) / array.length;
    }
}

schoolGrades([
    'Lilly 4 6 6 5',
    'Tim 5 6',
    'Tammy 2 4 3',
    'Tim 6 6'
]);