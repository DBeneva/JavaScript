function hospital(input) {
    const days = Number(input[0]);

    let patients = 0, doctors = 7, treatedPatients = 0;

    for (i = 1; i <= days; i++) {
        const num = Number(input[i]);
        patients += num;

        if (i % 3 == 0 && treatedPatients < patients / 2) doctors++;

        treatedPatients += Math.min(num, doctors);
    }

    console.log(
        `Treated patients: ${treatedPatients}.\n` +
        `Untreated patients: ${patients - treatedPatients}.`
    );
}

function hospitalArr(input) {
    let doctors = 7, patients = 0, treatedPatients = 0;

    input
        .map(Number)
        .slice(1)
        .forEach((d, i) => {
            doctors += (i + 1) % 3 == 0 && treatedPatients < patients / 2 ? 1 : 0;
            patients += d;
            treatedPatients += Math.min(d, doctors);
        });

    console.log(
        `Treated patients: ${treatedPatients}.\n` +
        `Untreated patients: ${patients - treatedPatients}.`
    );
}

hospital([4, 7, 27, 9, 1]);

console.log('=====================');

hospitalArr([4, 7, 27, 9, 1]);