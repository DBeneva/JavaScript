function getTimeIn15Minutes([hours, minutes]) {
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
    
    return `${hours}:${minutes}`;
}

function getTimeIn15MinutesTern(input) {
    let [hours, minutes] = input.map(Number);
    let minutesPlus15 = hours * 60 + minutes + 15;
    let hoursIn15Mins = Math.floor(minutesPlus15 / 60) == 24 ? 0 : Math.floor(minutesPlus15 / 60);
    
    return `${hoursIn15Mins}:${(minutesPlus15 % 60).toString().padStart(2, '0')}`;
}

console.log(getTimeIn15Minutes([23, 50]));

console.log('====================');

console.log(getTimeIn15MinutesTern([23, 59]));