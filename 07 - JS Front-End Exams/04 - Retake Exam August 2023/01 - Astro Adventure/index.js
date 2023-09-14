function solve(input) {
    const astronautsInTeam = input.shift();
    const astronauts = [];

    for (i = 0; i < astronautsInTeam; i++) {
        const [name, oxygen, energy] = input[i].split(' ');
        astronauts.push({ name, oxygen: Number(oxygen), energy: Number(energy) });
    }

    for (i = Number(astronautsInTeam); i < input.length; i++) {
        let [command, name, amount] = input[i].split(' - ');
        amount = Number(amount);
        const astronaut = astronauts.find(a => a.name === name);

        switch (command) {
            case 'Explore':
                if (astronaut.energy >= Number(amount)) {
                    astronaut.energy -= Number(amount);
                    console.log(`${name} has successfully explored a new area and now has ${astronaut.energy} energy!`);
                } else {
                    console.log(`${name} does not have enough energy to explore!`);
                }

                break;
            case 'Refuel':
                const currentEnergy = astronaut.energy;
                astronaut.energy = Math.min(currentEnergy + amount, 200);
                console.log(`${name} refueled their energy by ${Math.min(200 - currentEnergy, amount)}!`);       
                break;
            case 'Breath':
                const currentOxygen = astronaut.oxygen;
                astronaut.oxygen = Math.min(currentOxygen + amount, 100);
                console.log(`${name} took a breath and recovered ${Math.min(100 - currentOxygen, amount)} oxygen!`);
                break;
            default:
                break;
        }
    }

    console.log(astronauts.map(a => `Astronaut: ${a.name}, Oxygen: ${a.oxygen}, Energy: ${a.energy}`).join('\n'));
}

solve([  '3',
'John 50 120',
'Kate 80 180',
'Rob 70 150',
'Explore - John - 50',
'Refuel - Kate - 30',
'Breath - Rob - 20',
'End']
);