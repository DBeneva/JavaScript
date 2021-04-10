function needForSpeed(input) {
    let carsNumber = input.shift();
    let carsInfo = input.splice(0, carsNumber);

    let cars = new Map();
    carsInfo.map(car => {
        let [name, mileage, fuel] = car.split('|');
        cars.set(name, new Map([['mileage', Number(mileage)], ['fuel', Number(fuel)]]));
    });

    let actions = new Map([
        ['Drive', (cars, car, [distance, fuel]) => {
            if (fuel <= cars.get(car).get('fuel')) {
                cars.get(car).set('mileage', cars.get(car).get('mileage') + distance);
                cars.get(car).set('fuel', cars.get(car).get('fuel') - fuel);
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (cars.get(car).get('mileage') >= 100000) {
                    cars.delete(car);
                    console.log(`Time to sell the ${car}!`);
                }
            } else {
                console.log('Not enough fuel to make that ride');
            }
        }],
        ['Refuel', (cars, car, [fuel]) => {
            fuel = cars.get(car).get('fuel') + fuel > 75 ? 75 - cars.get(car).get('fuel') : fuel;
            cars.get(car).set('fuel', cars.get(car).get('fuel') + fuel);
            console.log(`${car} refueled with ${fuel} liters`);
        }],
        ['Revert', (cars, car, [kilometers]) => {
            cars.get(car).set('mileage', cars.get(car).get('mileage') - kilometers);
            if (cars.get(car).get('mileage') < 10000) {
                cars.get(car).set('mileage', 10000);
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        }],
        ['Stop', (cars) => {
            [...cars].sort(sortCars)
                .forEach(car => {
                    console.log(`${car[0]} -> Mileage: ${car[1].get('mileage')} kms, Fuel in the tank: ${car[1].get('fuel')} lt.`);
                });
        }]
    ]);

    input.forEach(instruction => {
            let [command, car, ...params] = instruction.split(' : ');
            [...params] = [...params].map(Number);
            actions.get(command)(cars, car, params);
        });


    function sortCars([carA, infoA], [carB, infoB]) {
        return infoB.get('mileage') - infoA.get('mileage') || carA.localeCompare(carB);
    }
}

needForSpeed([
    '3',
    'Audi A6|38000|62',
    'Mercedes CLS|11000|35',
    'Volkswagen Passat CC|45678|5',
    'Drive : Audi A6 : 543 : 47',
    'Drive : Mercedes CLS : 94 : 11',
    'Drive : Volkswagen Passat CC : 69 : 8',
    'Refuel : Audi A6 : 50',
    'Revert : Mercedes CLS : 500',
    'Revert : Audi A6 : 30000',
    'Stop'
  ]
);