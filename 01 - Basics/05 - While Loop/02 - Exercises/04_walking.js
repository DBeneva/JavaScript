function walking(input) {
    let stepsTotal = 0;

    for (let i = 0; i < input.length && stepsTotal < 10000; i++) {
        stepsTotal += input[i] == 'Going home' ? 0 : Number(input[i]);
    }

    console.log(
        stepsTotal >= 10000
            ? `Goal reached! Good job!`
            : `${10000 - stepsTotal} more steps to reach goal.`
    );
}

walking(['1500', '300', '2500', '3000', 'Going home', '200']);