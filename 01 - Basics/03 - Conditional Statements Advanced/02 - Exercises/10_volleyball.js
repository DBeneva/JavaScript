function printVolleyballDays(leapOrNormal, holidays, weekendsHome) {
    holidays = Number(holidays);
    weekendsHome = Number(weekendsHome);

    const daysWeekends = weekendsHome + 3 / 4 * (48 - weekendsHome);
    const daysHolidays = 2 / 3 * holidays;
    const multiplier = leapOrNormal == 'leap' ? 0.85 : 1;
    let daysTotal = (daysWeekends + daysHolidays) * multiplier;

    console.log(Math.trunc(daysTotal));
}

printVolleyballDays('leap', 5, 2);