function dateInFiveDays(input) {
    let day = Number(input[0]);
    let month = Number(input[1]);
    day += 5;
    let daysInMonth = 31;

    switch (month) {
        case 4:
        case 6:
        case 9:
        case 11: daysInMonth = 30; break;
        
        case 2: daysInMonth = 28; break;
    }

    if (day > daysInMonth) {
        month++;
        day -= daysInMonth;
        
        if (month > 12) {
            month = 1;
        }
    }

    if (month < 10) {
        month = '0' + month;
    }

    console.log(`${day}.${month}`);
}

dateInFiveDays(['27', '12']);