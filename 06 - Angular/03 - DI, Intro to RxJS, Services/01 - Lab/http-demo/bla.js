function previousDay(year, month, day) {

    // Решение 1 не бачка

    const myDate = new Date(year, month + 1, day);
    myDate.setDate(myDate.getDate() - 1);

    console.log(`${myDate.getFullYear()}-${myDate.getMonth()}-${myDate.getDate()}`);

    // Решение 2 бачка

    // let dateString = year + '-' + month + '-' + day;
    // let event = new Date(dateString);

    // event.setDate(day - 1);
    // console.log(event.getFullYear() + '-' + (Number(event.getMonth()) + 1) +'-' + event.getDate());
}

previousDay(2016, 10, 1);