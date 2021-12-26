function printTomsMood(daysOff) {
    daysOff = Number(daysOff);

    const timePlaying = daysOff * 127 + ((365 - daysOff) * 63);
    const difference = Math.abs(timePlaying - 30000);
    const hours = Math.floor(difference / 60);
    const minutes = difference % 60;
    const output = timePlaying > 30000
        ? `Tom will run away\n${hours} hours and ${minutes} minutes more for play`
        : `Tom sleeps well\n${hours} hours and ${minutes} minutes less for play`;

    console.log(output);
}

printTomsMood(113);