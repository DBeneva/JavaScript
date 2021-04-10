function hospital(...input) {
    let days = Number(input[0]);
    let patients = 0;
    let doctors = 7;
    let treatedPatients = 0;

    for (i = 1; i <= days; i++) {
        if (i % 3 == 0) {
            if (treatedPatients < (patients - treatedPatients)) {
                doctors += 1;
            }
        }

        patients += Number(input[i]);
        
        if (Number(input[i]) < doctors) {
            treatedPatients += Number(input[i]);
        } else {
            treatedPatients += doctors;
        }
    }

    console.log(`Treated patients: ${treatedPatients}.`);
    console.log(`Untreated patients: ${patients - treatedPatients}.`);
}

hospital(4, 7, 27, 9, 1);