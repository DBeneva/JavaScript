function walking(input) {
    const stepsTotal = input
        .map(Number)
        .filter(x => !isNaN(x))
        .reduce((a, c) => a + c, 0);

    console.log(
        stepsTotal >= 10000
            ? `Goal reached! Good job!`
            : `${10000 - stepsTotal} more steps to reach goal.`
    );
}

walking(['1500', '300', '2500', '3000', 'Going home', '200']);