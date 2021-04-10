function timeIn15Minutes([hours, minutes]) {
    hours = Number(hours);
    minutes = Number(minutes) + 15;

    if (minutes >= 60) {
        hours += 1;
        minutes -= 60;
    }

    if (hours >= 24) {
        hours -= 24;
    }
    
    if (minutes < 10) {
        minutes = '0' + minutes;
    }
    
    console.log(`${hours}:${minutes}`);
}

function timeIn15MinutesTernary(input) {
    let [hours, minutes] = input.map(Number);
    let minutesPlus15 = hours * 60 + minutes + 15;
    let hoursIn15Mins = Math.floor(minutesPlus15 / 60) == 24 ? 0 : Math.floor(minutesPlus15 / 60);
    
    console.log(`${hoursIn15Mins}:${(minutesPlus15 % 60).toString().padStart(2, '0')}`);
}

timeIn15Minutes([23, 50]);

console.log('====================');

timeIn15MinutesTernary([23, 59]);