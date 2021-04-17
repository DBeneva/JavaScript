function onTimeForTheExam([examHours, examMinutes, arrivalHours, arrivalMinutes]) {
    examHours = Number(examHours);
    examMinutes = Number(examMinutes);
    arrivalHours = Number(arrivalHours);
    arrivalMinutes = Number(arrivalMinutes);

    const examTime = examHours * 60 + examMinutes;
    const arrivalTime = arrivalHours * 60 + arrivalMinutes;
    const difference = Math.abs(examTime - arrivalTime);
    let outputLine = '';

    if (examTime < arrivalTime) {
        outputLine = 'Late';

        if (difference < 60) {
            outputLine += `\n${difference} minutes after the start`;
        } else {
            if (difference % 60 < 10) {
                outputLine += `\n${Math.trunc(difference / 60)}:0${difference % 60} hours after the start`;
            } else {
                outputLine += `\n${Math.trunc(difference / 60)}:${difference % 60} hours after the start`;
            }
        }
    } else if (examTime > arrivalTime && difference <= 30) {
        outputLine = `On time\n${difference} minutes before the start`;
    } else if (examTime > arrivalTime && difference > 30) {
        outputLine = 'Early';

        if (difference < 60) {
            outputLine += `\n${difference} minutes before the start`;
        } else {
            if (difference % 60 < 10) {
                outputLine += `\n${Math.trunc(difference / 60)}:0${difference % 60} hours before the start`;
            } else {
                outputLine += `\n${Math.trunc(difference / 60)}:${difference % 60} hours before the start`;
            }
        }
    } else if (examTime == arrivalTime) {
        outputLine = 'On time';
    }

    return outputLine;
}

function onTimeForTheExamObj(input) {
    const [examHours, examMinutes, arrivalHours, arrivalMinutes] = input.map(Number);
    const examTime = examHours * 60 + examMinutes;
    const arrivalTime = arrivalHours * 60 + arrivalMinutes;
    const difference = Math.abs(examTime - arrivalTime);
    const diffHours = `${difference >= 60 ? `${Math.trunc(difference / 60)}:` : ''}`;
    const diffMins = diffHours ? (difference % 60).toString().padStart(2, '0') : difference % 60;

    return `${earlyOrLate()}
${diffHours}${diffMins} ${difference < 60 ? 'minutes' : 'hours'} \
${earlyOrLate() == 'Late' ? 'after' : 'before'} the start`;

    function earlyOrLate() {
        const arrivalType = {
            Early: examTime > arrivalTime && difference > 30,
            'On time': (examTime > arrivalTime && difference <= 30) || examTime == arrivalTime,
            Late: examTime < arrivalTime
        };

        return Object.entries(arrivalType).find(([k, v]) => v == true)[0];
    }
}

console.log(onTimeForTheExam([11, 30, 11, 29]));

console.log('====================');

console.log(onTimeForTheExamObj([16, 00, 15, 00]));