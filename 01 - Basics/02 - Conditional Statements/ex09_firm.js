function printTimeForWork([hoursNeeded, days, workers]) {
    inputParamsToNumbers();

    const hoursForWork = days * 0.9 * 10 * workers;
    const difference = Math.floor(Math.abs(hoursForWork - hoursNeeded));
    const output = hoursForWork >= hoursNeeded
        ? `Yes!${difference} hours left.`
        : `Not enough time!${difference} hours needed.`;
    
    console.log(output);
    
    function inputParamsToNumbers() {
        hoursNeeded = Number(hoursNeeded);
        days = Number(days);
        workers = Number(workers);
    }
}

printTimeForWork([99, 3, 1]);