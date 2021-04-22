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
    const patients = input.slice(1).reduce((acc, curr) => acc + curr, 0);

    let doctors = 7;
    let treatedPatients = 0;

    for (i = 1; i < input.length; i++) {
        doctors += i % 3 == 0 && treatedPatients < input[i] / 2 ? 1 : 0;
        treatedPatients += input[i] < doctors ? input[i] : doctors;
    }

    return `Treated patients: ${treatedPatients}.
Untreated patients: ${patients - treatedPatients}.`;
}

console.log(hospital(4, 7, 27, 9, 1));

console.log('=====================');

console.log(hospitalArr(4, 7, 27, 9, 1));