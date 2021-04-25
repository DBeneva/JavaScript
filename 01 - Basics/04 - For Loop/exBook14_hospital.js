function hospital(...input) {
    const days = Number(input[0]);

    let patients = 0;
    let doctors = 7;
    let treatedPatients = 0;

    for (i = 1; i <= days; i++) {
        if (i % 3 == 0 && treatedPatients < patients / 2) {
            doctors++;
        }

        patients += Number(input[i]);

        if (Number(input[i]) < doctors) {
            treatedPatients += Number(input[i]);
        } else {
            treatedPatients += doctors;
        }
    }

    return `Treated patients: ${treatedPatients}.
Untreated patients: ${patients - treatedPatients}.`;
}

function hospitalArr(...input) {
    input.map(Number);
    input.shift();
    
    let doctors = 7;
    let patients = 0;
    let treatedPatients = 0;

    input.forEach((d, i) => {
        if (i + 1 % 3 == 0 && treatedPatients < patients / 2) {
            doctors++;
        }
        
        patients += d;
        treatedPatients += Math.min(d, doctors);
    });

    return `Treated patients: ${treatedPatients}.
Untreated patients: ${patients - treatedPatients}.`;
}

console.log(hospital(4, 7, 27, 9, 1));

console.log('=====================');

console.log(hospitalArr(4, 7, 27, 9, 1));