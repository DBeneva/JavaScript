function softUniReception(input) {
    input = input.map(Number);
    let students = input.pop();
    let studentsPerHour = input.reduce((a, b) => a + b, 0);
    let hours = 0;

    while (students > 0) {
        hours++;
        
        if (hours % 4 != 0) {
            students -= studentsPerHour;
        }
    }

    console.log(`Time needed: ${hours}h.`);
}

softUniReception(['3','2','5','40']);