function getSpeedInfo(speed) {
    speed = Number(speed);

    if (speed <= 10) {
        return 'slow';
    } else if (speed <= 50) {
        return 'average';
    } else if (speed <= 150) {
        return 'fast';
    } else if (speed <= 1000) {
        return 'ultra fast';
    } else if (speed > 1000) {
        return 'extremely fast';
    }
}

function getSpeedInfoObj(speed) {
    speed = Number(speed);

    const speedType = {
        slow: 10,
        average: 50,
        fast: 150,
        'ultra fast': 1000,
        'extremely fast': Number.MAX_SAFE_INTEGER
    };

    return Object.entries(speedType).find(([k, v]) => speed <= v)[0];
}

console.log(getSpeedInfo('8'));

console.log('====================');

console.log(getSpeedInfoObj('50'));