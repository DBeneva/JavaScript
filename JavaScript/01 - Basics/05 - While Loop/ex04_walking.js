function walking(input) {
    let i = 0;
    let stepsTotal = 0;

    while (stepsTotal < 10000) {
        if (input[i] == 'Going home') {
            stepsTotal += Number(input[i + 1]);
            break;
        }

        let steps = Number(input[i]);
        stepsTotal += steps;
        i++;
    }

    if (stepsTotal >= 10000) {
        console.log(`Goal reached! Good job!`);
    } else {
        console.log(`${10000 - stepsTotal} more steps to reach goal.`);
    }
}

walking(['1500', '300', '2500', '3000', 'Going home', '200']);