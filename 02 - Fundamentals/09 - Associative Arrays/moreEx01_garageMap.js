function garage(input) {
    let garages = new Map();

    input.forEach(x => {
        let [garage, car] = x.split(' - ');
        
        if (!garages.has(garage)) {
            garages.set(garage, [car]);
        } else {
            garages.get(garage).push(car);
        }
    });

    [...garages].map(garage => {
            console.log(`Garage № ${garage[0]}`);
            
            garage[1].forEach(x => {
                console.log(`--- ${x.replace(/: /g, ' - ')}`);
            });
        });
}

garage(['1 - color: blue, fuel type: diesel',
    '1 - color: red, manufacture: Audi',
    '2 - fuel type: petrol',
    '4 - color: dark blue, fuel type: diesel, manufacture: Fiat'
]);