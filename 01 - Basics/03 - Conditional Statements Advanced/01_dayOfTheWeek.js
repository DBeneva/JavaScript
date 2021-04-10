function getDayOfTheWeek(num) {
    num = Number(num);
    let output = '';

    switch (num) {
        case 1: output = 'Monday'; break;
        case 2: output = 'Tuesday'; break;
        case 3: output = 'Wednesday'; break;
        case 4: output = 'Thursday'; break;
        case 5: output = 'Friday'; break;
        case 6: output = 'Saturday'; break;
        case 7: output = 'Sunday'; break;
        default: output = 'Error'; break;
    }

    return output;
}

function getDayOfTheWeekObj(num) {
    const days = {
        1: 'Monday',
        2: 'Tuesday',
        3: 'Wednesday',
        4: 'Thursday',
        5: 'Friday',
        6: 'Saturday',
        7: 'Sunday'
    };

    return days[num] || 'Error';
}

console.log(getDayOfTheWeek(58));

console.log('====================');

console.log(getDayOfTheWeekObj(5));