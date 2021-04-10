function matchDates([input]) {
    let validDate = /\b(?<day>\d{2})([\.\-/])(?<month>[A-Z][a-z]{2})\2(?<year>\d{4})\b/g;
    
    [...input.matchAll(validDate)].forEach(x => {
        console.log(`Day: ${x.groups.day}, Month: ${x.groups.month}, Year: ${x.groups.year}`);
    });
}

matchDates(['13/Jul/1928, 10-Nov-1934, , 01/Jan-1951,f 25.Dec.1937 23/09/1973, 1/Feb/2016']);