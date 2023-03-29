function horseRacing(input) {
    const horses = input.shift().split('|');

    for (let i = 0; i < input.length && input[i].split(' ')[0] !== 'Finish'; i++) {
        const command = input[i].split(' ')[0];
        const horse = input[i].split(' ')[1];
        const overtakenHorse = input[i].split(' ')[2];
        // console.log(horses);

        switch(command) {
            case 'Retake':
                if (horses.indexOf(horse) < horses.indexOf(overtakenHorse)) {
                    horses.splice(horses.indexOf(horse), 1, overtakenHorse);
                    horses.splice(horses.lastIndexOf(overtakenHorse), 1, horse);
                    console.log(`${horse} retakes ${overtakenHorse}.`);
                    // console.log(horses);
                }

                break;
            case 'Trouble':
                if (horses.indexOf(horse) > 0) {
                    horses.splice(horses.indexOf(horse) - 1, 0, horse);
                    horses.splice(horses.lastIndexOf(horse), 1);
                    console.log(`Trouble for ${horse} - drops one position.`);
                    // console.log(horses);
                }

                break;
            case 'Rage':
                horses.splice(horses.indexOf(horse) + 3, 0, horse);
                horses.splice(horses.indexOf(horse), 1);
                console.log(`${horse} rages 2 positions ahead.`);
                // console.log(horses);
                break;
            case 'Miracle':
                horses.push(horses.shift());
                console.log(`What a miracle - ${horses.slice(-1)} becomes first.`);
                break;
        }
    }

    console.log(horses.join('->'));
    console.log(`The winner is: ${horses.slice(-1)}`);
}

horseRacing(['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish']);