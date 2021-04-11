function convertUnits([num, from, to]) {
    num = Number(num);
    let result = 0;

    if (from == 'mm') {
        if (to == 'cm') {
            result = num / 10;
        } else if (to == 'm') {
            result = num / 1000;
        }
    } else if (from == 'cm') {
        if (to == 'mm') {
            result = num * 10;
        } else if (to == 'm') {
            result = num / 100;
        }
    } else {
        if (to == 'mm') {
            result = num * 1000;
        } else if (to == 'cm') {
            result = num * 100;
        }
    }

    return result.toFixed(3);
}

function convertUnitsObj([num, from, to]) {
    num = Number(num);

    const units = {
        mm: {
            cm: num / 10,
            m: num / 1000
        },
        cm: {
            mm: num * 10,
            m: num / 100
        },
        m: {
            mm: num * 1000,
            cm: num * 100
        }
    };

    return units[from][to].toFixed(3);
}

console.log(convertUnits([12, 'mm', 'm']));

console.log('====================');

console.log(convertUnitsObj([12, 'mm', 'm']));