function sleepyTomCat(daysOff) {
    daysOff = Number(daysOff);

    let timePlaying = daysOff * 127 + ((365 - daysOff) * 63);
    let difference = Math.abs(timePlaying - 30000);
    let hoursDifference = Math.floor(difference / 60);
    let minutesDifference = difference % 60;

    if (timePlaying > 30000) {
        console.log('Tom will run away');
        console.log(`${hoursDifference} hours and ${minutesDifference} minutes more for play`);
    } else {
        console.log('Tom sleeps well');
        console.log(`${hoursDifference} hours and ${minutesDifference} minutes less for play`);
    }
}

function sleepyTomCatTernary(daysOff) {
    daysOff = Number(daysOff);

    let timePlaying = daysOff * 127 + ((365 - daysOff) * 63);
    let difference = Math.abs(timePlaying - 30000);
    let hours = Math.floor(difference / 60);
    let minutes = difference % 60;

    let result = timePlaying > 30000 ?
        `Tom will run away\n${hours} hours and ${minutes} minutes more for play` :
        `Tom sleeps well\n${hours} hours and ${minutes} minutes less for play`;

    console.log(result);
}

sleepyTomCat(113);

console.log('====================');

sleepyTomCatTernary(113);