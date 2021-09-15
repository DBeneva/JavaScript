function getWorkDone([hoursNeeded, days, workers]) {
    hoursNeeded = Number(hoursNeeded);
    days = Number(days);
    workers = Number(workers);

    const hoursForWork = days * 0.9 * 10 * workers;
    const difference = Math.abs(hoursForWork - hoursNeeded);

    if (hoursForWork >= hoursNeeded) {
        return `Yes!${Math.floor(difference)} hours left.`;
    } else {
        return `Not enough time!${Math.floor(difference)} hours needed.`;
    }
}

function getWorkDoneTern(input) {
    const [hoursNeeded, days, workers] = input.map(Number);
    const hoursForWork = days * 0.9 * 10 * workers;
    const difference = Math.abs(hoursForWork - hoursNeeded);

    const result = hoursForWork >= hoursNeeded ?
        `Yes!${Math.floor(difference)} hours left.` :
        `Not enough time!${Math.floor(difference)} hours needed.`;

    return result;
}

console.log(getWorkDone([99, 3, 1]));

console.log('====================');

console.log(getWorkDoneTern([99, 3, 1]));