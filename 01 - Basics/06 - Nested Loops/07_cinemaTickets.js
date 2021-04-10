function cinemaTickets(input) {
    let ticketsTotal = 0;
    let ticketsStudent = 0;
    let ticketsStandard = 0;
    let ticketsKid = 0;
    let i = 0;

    while (input[i] != 'Finish') {
        let movie = input[i];
        i++;
        let freeSeats = Number(input[i]);
        i++;
        let currentSeats = 0;

        while (currentSeats < freeSeats) {
            if (input[i] == 'End' || input[i] == 'Finish') {
                i++;
                break;
            }

            if (input[i] == 'standard') {
                ticketsStandard++;
            } else if (input[i] == 'student') {
                ticketsStudent++;
            } else if (input[i] == 'kid') {
                ticketsKid++;
            }

            currentSeats++;
            ticketsTotal++;
            i++;
        }

        let percentage = currentSeats * 100 / freeSeats; 
        console.log(`${movie} - ${percentage.toFixed(2)}% full.`);
        
        if (input[i] == 'Finish') {
            break;
        }
    }
    
    let studentPercentage = ticketsStudent * 100 / ticketsTotal;
    let standardPercentage = ticketsStandard * 100 / ticketsTotal;
    let kidsPercentage = ticketsKid * 100 / ticketsTotal;
    console.log(`Total tickets: ${ticketsTotal}`);
    console.log(`${studentPercentage.toFixed(2)}% student tickets.`);
    console.log(`${standardPercentage.toFixed(2)}% standard tickets.`);
    console.log(`${kidsPercentage.toFixed(2)}% kids tickets.`);
}

cinemaTickets(['Taxi', '10', 'standard', 'kid',
    'student', 'student', 'standard', 'standard',
    'End', 'Scary Movie', '6', 'student', 'student',
    'student', 'student', 'student', 'student',
    'Finish']);
