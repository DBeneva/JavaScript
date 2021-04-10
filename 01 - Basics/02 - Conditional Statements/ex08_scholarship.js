function scholarship([income, averageGrade, minimumSalary]) {
    income = Number(income);
    averageGrade = Number(averageGrade);
    minimumSalary = Number(minimumSalary);

    let socialScholarship = 0;
    let excellentScholarship = 0;

    if (averageGrade >= 4.5) {
        if (income < minimumSalary) {
            socialScholarship += minimumSalary * 0.35;
        }
    }

    if (averageGrade >= 5.5) {
        excellentScholarship += averageGrade * 25;
    }

    if (socialScholarship == 0 && excellentScholarship == 0) {
        console.log('You cannot get a scholarship!');
    } else if (socialScholarship > excellentScholarship) {
        console.log(`You get a Social scholarship ${Math.floor(socialScholarship)} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`);
    }
}

function scholarshipTernary(input) {
    let [income, averageGrade, minimumSalary] = input.map(Number);

    let socialScholarship = averageGrade >= 4.5 && income < minimumSalary ?
        minimumSalary * 0.35 : 0;
    let excellentScholarship = averageGrade >= 5.5 ? averageGrade * 25 : 0;

    let result = socialScholarship == 0 && excellentScholarship == 0 ?
        'You cannot get a scholarship!' :
        socialScholarship > excellentScholarship ?
            `You get a Social scholarship ${Math.floor(socialScholarship)} BGN` :
            `You get a scholarship for excellent results ${Math.floor(excellentScholarship)} BGN`;

    console.log(result);
}

scholarship([300.00, 5.65, 420.00]);

console.log('====================');

scholarshipTernary([300.00, 5.65, 420.00]);