function nextDay(year, month, date) {
    let currentDate = new Date(year, month - 1, date);
    let nextDay = new Date(currentDate.setDate(currentDate.getDate() + 1));
    let nextDayYear = nextDay.getFullYear();
    let nextDayMonth = nextDay.getMonth() + 1;
    let nextDayDate = nextDay.getDate();
    
    console.log(nextDayYear + "-" + nextDayMonth + "-" + nextDayDate);
}

nextDay(2016, 9, 30);