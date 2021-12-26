function printScholarshipResults([income, averageGrade, minimumSalary]) {
    inputParamsToNumbers();

    const socialScholarship = getSocialScholarship();
    const excellenceScholarship = getExcellenceScholarship();

    if (socialScholarship == 0 && excellenceScholarship == 0) {
        console.log('You cannot get a scholarship!');
    } else if (socialScholarship > excellenceScholarship) {
        console.log(`You get a Social scholarship ${socialScholarship} BGN`);
    } else {
        console.log(`You get a scholarship for excellent results ${excellenceScholarship} BGN`);
    }

    function inputParamsToNumbers() {
        income = Number(income);
        averageGrade = Number(averageGrade);
        minimumSalary = Number(minimumSalary);
    }

    function getSocialScholarship() {
        return averageGrade >= 4.5 && income < minimumSalary
        ? Math.floor(minimumSalary * 0.35)
        : 0;
    }
    
    function getExcellenceScholarship() {
        return averageGrade >= 5.5
        ? Math.floor(averageGrade * 25)
        : 0;
    }
}

printScholarshipResults([300.00, 5.65, 420.00]);