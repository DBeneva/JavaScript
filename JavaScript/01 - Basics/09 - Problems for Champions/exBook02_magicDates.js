function magicDates(input) {
    let startYear = Number(input[0]);
    let finishYear = Number(input[1]);
    let magicWeight = Number(input[2]);
    let magicDates = false;

    for (let year = startYear; year <= finishYear; year++) {
        let year1 = Math.trunc(year / 1000);
        let year2 = Math.trunc(year / 100) % 10;
        let year3 = Math.trunc(year / 10) % 10;
        let year4 = year % 10;

        for (let month = 1; month <= 12; month++) {
            let month1 = Math.trunc(month / 10);
            let month2 = month % 10;
            let daysInMonth = 31;
            
            switch (month) {
                case 2:
                    daysInMonth = 28;
                    
                    if (year % 4 == 0) {
                        daysInMonth = 29;
                    }
                    break;

                case 4:
                case 6:
                case 9:
                case 11:
                    daysInMonth = 30;
                    break;
            }

            for (let date = 1; date <= daysInMonth; date++) {
                let date1 = Math.trunc(date / 10);
                let date2 = date % 10;

                let currentWeight = date1 * (date2 + month1 + month2 + year1 + year2 + year3 + year4) +
                    date2 * (month1 + month2 + year1 + year2 + year3 + year4) +
                    month1 * (month2 + year1 + year2 + year3 + year4) +
                    month2 * (year1 + year2 + year3 + year4) +
                    year1 * (year2 + year3 + year4) +
                    year2 * (year3 + year4) +
                    year3 * year4;

                if (currentWeight == magicWeight) {
                    magicDates = true;
                    console.log(`${date1}${date2}-${month1}${month2}-${year}`);
                }
            }
        }
    }

    if (!magicDates) {
        console.log('No');
    }
}

magicDates(['2007', '2007', '144', '']);