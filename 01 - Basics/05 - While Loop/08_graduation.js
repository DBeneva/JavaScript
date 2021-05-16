function graduation(input) {
    const name = input[0];
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

    const averageGrade = gradeTotal / 12;
    
    if (years >= 12) {
        return `${name} graduated. Average grade: ${averageGrade.toFixed(2)}`;
    }
}

function graduationArr(input) {
    const name = input.shift();
    const grades = input.filter(x => x >= 4);
    const averageGrade = grades.reduce((acc, curr) => acc + curr / grades.length, 0);
    
    return grades.length >= 12 ? `${name} graduated. Average grade: ${averageGrade.toFixed(2)}` : '';
}

console.log(graduation([
   'Pesho',
    4,
    5.5,
    6,
    5.43,
    4.5,
    6,
    5.55,
    5,
    6,
    6,
    5.43,
    5
]));

console.log('====================');

console.log(graduationArr([
    'Pesho',
     4,
     5.5,
     6,
     5.43,
     4.5,
     6,
     5.55,
     5,
     6,
     6,
     5.43,
     5
 ]));