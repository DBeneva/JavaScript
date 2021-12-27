function printSpeedInfo(speed) {
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

printSpeedInfo('150');