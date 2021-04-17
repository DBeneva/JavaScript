function getVolleyballDays(leapOrNormal, holidays, weekendsHomeTown) {
    holidays = Number(holidays);
    weekendsHomeTown = Number(weekendsHomeTown);

    const daysVolleyballWeekends = weekendsHomeTown + 3 / 4 * (48 - weekendsHomeTown);
    const daysVolleyballHolidays = 2 / 3 * holidays;
    let daysVolleyballTotal = daysVolleyballWeekends + daysVolleyballHolidays;

    if (leapOrNormal == 'leap') {
        daysVolleyballTotal *= 0.85;
    }

    return Math.trunc(daysVolleyballTotal);
}

function getVolleyballDaysTern(leapOrNormal, ...params) {
    const [holidays, weekendsHomeTown] = params.map(Number);

    const daysVolleyballWeekends = weekendsHomeTown + 3 / 4 * (48 - weekendsHomeTown);
    const daysVolleyballHolidays = 2 / 3 * holidays;
    const multiplier = leapOrNormal == 'leap' ? 0.85 : 1;
    const daysVolleyballTotal = (daysVolleyballWeekends + daysVolleyballHolidays) * multiplier;

    return Math.trunc(daysVolleyballTotal);
}

console.log(getVolleyballDays('leap', 5, 2));

console.log('====================');

console.log(getVolleyballDaysTern('leap', 5, 2));