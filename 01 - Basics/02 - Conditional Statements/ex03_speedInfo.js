function speedInfo(speed) {
    speed = Number(speed);

    if (speed <= 10) {
        console.log('slow');
    } else if (speed <= 50) {
        console.log('average');
    } else if (speed <= 150) {
        console.log('fast');
    } else if (speed <= 1000) {
        console.log('ultra fast');
    } else if (speed > 1000) {
        console.log('extremely fast');
    }
}

function speedInfoObj(speed) {
    speed = Number(speed);

    const speedType = {
        slow: 10,
        average: 50,
        fast: 150,
        'ultra fast': 1000,
        'extremely fast': Number.MAX_SAFE_INTEGER
    };

    console.log(Object.entries(speedType).find(([k, v]) => speed <= v)[0]);
}

speedInfo('8');

console.log('====================');

speedInfoObj('50');