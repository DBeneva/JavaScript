function onTimeForTheExam(examHours, examMinutes, arrivalHours, arrivalMinutes) {
    examHours = Number(examHours);
    examMinutes = Number(examMinutes);
    arrivalHours = Number(arrivalHours);
    arrivalMinutes = Number(arrivalMinutes);

    let examTime = examHours * 60 + examMinutes;
    let arrivalTime = arrivalHours * 60 + arrivalMinutes;
    let difference = Math.abs(examTime - arrivalTime);

    if (examTime < arrivalTime) {
        console.log('Late');
        
        if (difference < 60) {
            console.log(`${difference} minutes after the start`);
        } else {
            if (difference % 60 < 10) {
                console.log(`${Math.trunc(difference / 60)}:0${difference % 60} hours after the start`);
            } else {
                console.log(`${Math.trunc(difference / 60)}:${difference % 60} hours after the start`);
            }
        }
    } else if (examTime > arrivalTime && difference <= 30) {
        console.log('On time');
        console.log(`${difference} minutes before the start`);
    } else if (examTime > arrivalTime && difference > 30) {
        console.log('Early');
        
        if (difference < 60) {
            console.log(`${difference} minutes before the start`);
        } else {
            if (difference % 60 < 10) {
                console.log(`${Math.trunc(difference / 60)}:0${difference % 60} hours before the start`);
            } else {
                console.log(`${Math.trunc(difference / 60)}:${difference % 60} hours before the start`);
            }
        }
    } else if (examTime == arrivalTime) {
        console.log('On time');
    }
}

onTimeForTheExam(11, 30, 12, 29);