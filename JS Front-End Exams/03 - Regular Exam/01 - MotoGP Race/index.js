function motoGPRace(input) {
    const riders = input.shift();
    const race = [];

    for (let i = 0; i < riders; i++) {
        const [name, fuelCapacity, position] = input[i].split('|');
        race.push({
            name,
            fuelCapacity: Number(fuelCapacity),
            position: Number(position)
        });
    }

    for (let i = riders; i < input.length; i++) {
        const [command, name, thirdParameter, fourthParameter] = input[i].split(' - ');
        const rider = race.find(r => r.name === name);

        switch(command) {
            case 'StopForFuel':
                if (rider.fuelCapacity < thirdParameter) {
                    rider.position = fourthParameter;
                    console.log(`${name} stopped to refuel but lost his position, now he is ${rider.position}.`);
                } else {
                    console.log(`${name} does not need to stop for fuel!`);
                }

                break;
            case 'Overtaking':
                const secondRider = race.find(r => r.name === thirdParameter);

                if (secondRider.position > rider.position) {
                    const position = rider.position;
                    rider.position = secondRider.position
                    secondRider.position = position;

                    console.log(`${name} overtook ${thirdParameter}!`);
                }

                break;
            case 'EngineFail':
                race.splice(race.indexOf(rider), 1);

                console.log(`${name} is out of the race because of a technical issue, ${thirdParameter} before the finish.`);
                break;
            case 'Finish': break;
        }
    }

    race.forEach(r => {
        console.log(r.name);
        console.log(`  Final position: ${r.position}`);
    });
}

motoGPRace(["3",
"Valentino Rossi|100|1",
"Marc Marquez|90|2",
"Jorge Lorenzo|80|3",
"StopForFuel - Valentino Rossi - 50 - 1",
"Overtaking - Marc Marquez - Jorge Lorenzo",
"EngineFail - Marc Marquez - 10",
"Finish"]);