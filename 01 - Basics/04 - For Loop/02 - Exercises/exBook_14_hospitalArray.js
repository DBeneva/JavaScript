function hospital(input) {
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