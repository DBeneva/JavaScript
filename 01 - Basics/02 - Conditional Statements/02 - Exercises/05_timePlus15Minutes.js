function printTimeIn15Minutes([hours, minutes]) {
    const minutesTotal = hours * 60 + Number(minutes) + 15;
    const hoursin15Mins = getHours();
    const minutesIn15Mins = getMinutes();
    
    console.log(`${hoursin15Mins}:${minutesIn15Mins}`);

    function getHours() {
        if (Math.floor(minutesTotal / 60) == 24) return 0;
        else return Math.floor(minutesTotal / 60);
    }

    function getMinutes() {
        return (minutesTotal % 60).toString().padStart(2, '0');
    }
}

printTimeIn15Minutes([23, 50]);
printTimeIn15Minutes(['23', '50']);