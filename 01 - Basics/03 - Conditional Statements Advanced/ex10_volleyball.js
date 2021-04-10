function volleyball(leapOrNormal, holidays, weekendsHomeTown) {
    holidays = Number(holidays);
    weekendsHomeTown = Number(weekendsHomeTown);

    let daysVolleyballWeekends = weekendsHomeTown + 3 / 4 * (48 - weekendsHomeTown);
    let daysVolleyballHolidays = 2 / 3 * holidays;
    let daysVolleyballTotal = daysVolleyballWeekends + daysVolleyballHolidays;

    if (leapOrNormal == 'leap') {
        daysVolleyballTotal += 0.15 * daysVolleyballTotal;
    }

    console.log(Math.trunc(daysVolleyballTotal));
}

volleyball('leap', 5, 2);