function needForSpeed(input) {
    let carsNumber = input.shift();
    let carsInfo = input.splice(0, carsNumber);

    let cars = {};
    carsInfo.map(car => {
        let [name, mileage, fuel] = car.split('|');
        cars[name] = { mileage: Number(mileage), fuel: Number(fuel) };
    });

    let actions = {
        Drive(cars, car, [distance, fuel]) {
            if (fuel <= cars[car].fuel) {
                cars[car].mileage += distance;
                cars[car].fuel -= fuel;
                console.log(`${car} driven for ${distance} kilometers. ${fuel} liters of fuel consumed.`);

                if (cars[car].mileage >= 100000) {
                    delete cars[car];
                    console.log(`Time to sell the ${car}!`);
                }
            } else {
                console.log('Not enough fuel to make that ride');
            }
        },
        Refuel(cars, car, [fuel]) {
            fuel = cars[car].fuel + fuel > 75 ? 75 - cars[car].fuel : fuel;
            cars[car].fuel += fuel;
            console.log(`${car} refueled with ${fuel} liters`);
        },
        Revert(cars, car, [kilometers]) {
            cars[car].mileage -= kilometers;
            if (cars[car].mileage < 10000) {
                cars[car].mileage = 10000;
            } else {
                console.log(`${car} mileage decreased by ${kilometers} kilometers`);
            }
        },
        Stop(cars) {
            Object.entries(cars).sort(sortCars)
                .forEach(car => {
                    console.log(`${car[0]} -> Mileage: ${car[1].mileage} kms, Fuel in the tank: ${car[1].fuel} lt.`);
                });
        }
    };

    input.forEach(instruction => {
            let [command, car, ...params] = instruction.split(' : ');
            [...params] = [...params].map(Number);
            actions[command](cars, car, params);
        });


    function sortCars([carA, infoA], [carB, infoB]) {
        return infoB.mileage - infoA.mileage || carA.localeCompare(carB);
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