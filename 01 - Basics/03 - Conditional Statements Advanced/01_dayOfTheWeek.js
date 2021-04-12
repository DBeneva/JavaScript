function getDayOfTheWeek(num) {
    num = Number(num);

    switch (num) {
        case 1: return 'Monday';
        case 2: return 'Tuesday';
        case 3: return 'Wednesday';
        case 4: return 'Thursday';
        case 5: return 'Friday';
        case 6: return 'Saturday';
        case 7: return 'Sunday';
        default: return 'Error';
    }
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

console.log(getDayOfTheWeekObj('5'));