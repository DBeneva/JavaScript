function onTimeForTheExam([examHours, examMinutes, arrivalHours, arrivalMinutes]) {
    inputParamsToNumbers();

    const examTime = examHours * 60 + examMinutes;
    const arrivalTime = arrivalHours * 60 + arrivalMinutes;
    const difference = Math.abs(examTime - arrivalTime);
    const output = getOutput();

    console.log(output);
    
    function getOutput() {
        if (examTime < arrivalTime) {
            return createOutput('Late\n', 'after the start');
        } else if (difference > 30) {
            return createOutput('Early\n', 'before the start');
        } else if (difference > 0) {
            return createOutput('On time\n', 'before the start');
        } else {
            return createOutput('On time');
        }
    }

    function createOutput(earlyOrLate, beforeOrAfter = '') {
        return earlyOrLate + getTime() + beforeOrAfter;
    }

    function getTime() {
        if (difference >= 60) return `${getHours()}:${getMins()} hours `;
        else if (difference > 0) return `${difference} minutes `;
        else return '';
    }

    function getHours() {
        if (difference >= 60) return Math.trunc(difference / 60);
        else return '';
    }

    function getMins() {
        return (difference % 60).toString().padStart(2, '0');
    }
  
    function inputParamsToNumbers() {
        examHours = Number(examHours);
        examMinutes = Number(examMinutes);
        arrivalHours = Number(arrivalHours);
        arrivalMinutes = Number(arrivalMinutes);
    }
}

onTimeForTheExam([11, 30, 11, 29]);
onTimeForTheExam([16, 10, 15, 00]);
onTimeForTheExam([10, 00, 10, 00]);