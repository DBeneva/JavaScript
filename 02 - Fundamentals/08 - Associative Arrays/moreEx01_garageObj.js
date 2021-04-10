function garage(input) {
    let garages = [];

    input.forEach(x => {
        let [garageNumber, carInfo] = x.split(' - ');
        
        if (!garages.find(garage => garage.number == garageNumber)) {
            garages.push({
                number: garageNumber,
                car: []
            });
        }
        
        garages.find(x => x.number == garageNumber).car.push(carInfo);
    });

    garages.map(garage => {
            console.log(`Garage № ${garage.number}`);
            
            garage.car.map(x => {
                console.log(`--- ${x.replace(/: /g, ' - ')}`);
            });
        });
}

garage([
    '1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);