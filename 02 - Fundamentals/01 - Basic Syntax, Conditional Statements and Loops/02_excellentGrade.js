function excellentGrade(grade) {
    grade = Number(grade);

    if (grade >= 5.5) {
        console.log('Excellent');
    } else {
        console.log('Not excellent');
    }
}

excellentGrade('5.6');