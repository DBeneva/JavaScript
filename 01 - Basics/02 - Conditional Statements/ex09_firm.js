function firm([hoursNeeded, days, workers]) {
    hoursNeeded = Number(hoursNeeded);
    days = Number(days);
    workers = Number(workers);

    let daysForWork = days - 0.1 * days;
    let hoursForWorkPerPerson = daysForWork * 10;
    let hoursForWork = hoursForWorkPerPerson * workers;
    let difference = Math.abs(hoursForWork - hoursNeeded);

    if (hoursForWork >= hoursNeeded) {
        console.log(`Yes!${Math.floor(difference)} hours left.`);
    } else {
        console.log(`Not enough time!${Math.floor(difference)} hours needed.`);
    }
}

function firmTernary(input) {
    let [hoursNeeded, days, workers] = input.map(Number);
    let hoursForWork = (days - 0.1 * days) * 10 * workers;
    let difference = Math.abs(hoursForWork - hoursNeeded);

    let result = hoursForWork >= hoursNeeded ?
        `Yes!${Math.floor(difference)} hours left.` :
        `Not enough time!${Math.floor(difference)} hours needed.`;

    console.log(result);
}

firm([99, 3, 1]);

console.log('====================');

firmTernary([99, 3, 1]);