function springVacationTrip(input) {
    input = input.map(Number);
    let days = input.shift();
    let budget = input.shift();
    let people = input.shift();
    let fuelPerKm = input.shift();
    let foodExpenses = input.shift() * people * days;
    let roomPrice = input.shift() * people * days;
    roomPrice = people > 10 ? roomPrice - 0.25 * roomPrice : roomPrice;
    let expenses = foodExpenses + roomPrice;

    for (let i = 1; i <= days; i++) {
        expenses += fuelPerKm * input.shift();
        expenses = i % 3 == 0 || i % 5 == 0 ? expenses + 0.4 * expenses : expenses;
        expenses = i % 7 == 0 ? expenses - expenses / people : expenses;

        if (expenses > budget) {
            console.log(`Not enough money to continue the trip. You need ${(expenses - budget).toFixed(2)}$ more.`);
            break;
        }
    }

    if (expenses <= budget) {
        console.log(`You have reached the destination. You have ${(budget - expenses).toFixed(2)}$ budget left.`);
    }
}

springVacationTrip([
    '10',  '20500', '11',
    '1.2', '8',     '13',
    '100', '150',   '500',
    '400', '600',   '130',
    '300', '350',   '200',
    '300'
]);