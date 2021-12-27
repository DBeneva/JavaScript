function printDayOfTheWeek(num) {
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

printDayOfTheWeek('5');