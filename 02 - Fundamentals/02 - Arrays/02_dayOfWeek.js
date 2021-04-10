function dayOfWeek(num) {
    let days = [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday'
    ];

    if (days[num - 1] == undefined) {
        console.log('Invalid day!');
    } else {
        console.log(days[num - 1]);
    }
}

dayOfWeek(8);