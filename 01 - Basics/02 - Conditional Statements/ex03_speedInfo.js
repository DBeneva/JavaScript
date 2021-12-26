function printSpeedInfo(speed) {
    speed = Number(speed);

    if (speed <= 10) console.log('slow');
    else if (speed <= 50) console.log('average');
    else if (speed <= 150) console.log('fast');
    else if (speed <= 1000) console.log('ultra fast');
    else if (speed > 1000) console.log('extremely fast');
}

function printSpeedInfoArray(speed) {
    speed = Number(speed);

    const range = [
        { condition: speed <= 10, output: 'slow' },
        { condition: speed <= 50, output: 'average' },
        { condition: speed <= 150, output: 'fast' },
        { condition: speed <= 1000, output: 'ultra fast' },
        { condition: speed > 1000, output: 'extremely fast' }
    ];

    console.log(range.find(x => x.condition).output);
}

printSpeedInfo('8');
console.log('====================');
printSpeedInfoArray('150');