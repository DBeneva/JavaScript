function sleepyTomCat(daysOff) {
    daysOff = Number(daysOff);

    const timePlaying = daysOff * 127 + ((365 - daysOff) * 63);
    const difference = Math.abs(timePlaying - 30000);
    const hours = Math.floor(difference / 60);
    const minutes = difference % 60;

    if (timePlaying > 30000) {
        return `Tom will run away\n${hours} hours and ${minutes} minutes more for play`;
    } else {
        return `Tom sleeps well\n${hours} hours and ${minutes} minutes less for play`;
    }
}

function sleepyTomCatTern(daysOff) {
    daysOff = Number(daysOff);

    const timePlaying = daysOff * 127 + ((365 - daysOff) * 63);
    const difference = Math.abs(timePlaying - 30000);
    const hours = Math.floor(difference / 60);
    const minutes = difference % 60;

    let result = timePlaying > 30000 ?
        `Tom will run away\n${hours} hours and ${minutes} minutes more for play` :
        `Tom sleeps well\n${hours} hours and ${minutes} minutes less for play`;

    return result;
}

console.log(sleepyTomCat(113));

console.log('====================');

console.log(sleepyTomCatTern(113));