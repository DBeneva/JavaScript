function scholarship([income, averageGrade, minimumSalary]) {
    income = Number(income);
    averageGrade = Number(averageGrade);
    minimumSalary = Number(minimumSalary);

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if (averageGrade >= 4.5) {
        if (income < minimumSalary) {
            socialScholarship = minimumSalary * 0.35;
        }
    }

    if (averageGrade >= 5.5) {
        excellentScholarship = averageGrade * 25;
    }

    if (socialScholarship == 0 && excellentScholarship == 0) {
        return 'You cannot get a scholarship!';
    } else if (socialScholarship > excellentScholarship) {
        return `You get a Social scholarship ${Math.floor(socialScholarship)} BGN`;
    } else {
        return `You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`;
    }
}

function scholarshipTern(input) {
    const [income, averageGrade, minimumSalary] = input.map(Number);

    const socialScholarship = averageGrade >= 4.5 && income < minimumSalary ?
        minimumSalary * 0.35 : 0;
    const excellentScholarship = averageGrade >= 5.5 ? averageGrade * 25 : 0;

    const result = socialScholarship == 0 && excellentScholarship == 0 ?
        'You cannot get a scholarship!' :
        socialScholarship > excellentScholarship ?
            `You get a Social scholarship ${Math.floor(socialScholarship)} BGN` :
            `You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`;

    return result;
}

console.log(scholarship([300.00, 5.65, 420.00]));

console.log('====================');

console.log(scholarshipTern([300.00, 5.65, 420.00]));