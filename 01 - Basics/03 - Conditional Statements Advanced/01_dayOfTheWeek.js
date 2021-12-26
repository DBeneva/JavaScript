function printDayOfTheWeek(num) {
    num = Number(num);

    switch (num) {
        case 1: console.log('Monday'); break;
        case 2: console.log('Tuesday'); break;
        case 3: console.log('Wednesday'); break;
        case 4: console.log('Thursday'); break;
        case 5: console.log('Friday'); break;
        case 6: console.log('Saturday'); break;
        case 7: console.log('Sunday'); break;
        default: console.log('Error'); break;
    }
}

function printDayOfTheWeekArray(num) {
    const days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    console.log(days[num - 1] || 'Error');
}

printDayOfTheWeek(58);
console.log('====================');
printDayOfTheWeekArray('5');