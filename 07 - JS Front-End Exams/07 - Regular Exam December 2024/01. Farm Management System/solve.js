function solve(input) {
    const numberOfFarmers = Number(input[0]);
    const farmers = {};

    for (let i = 1; i <= numberOfFarmers; i++) {
        const [farmerName, area, tasks] = input[i].split(' ');

        farmers[farmerName] = { area, tasks };
    }

    for (let i = numberOfFarmers + 1; i < input.length; i++) {
        const [command, farmerName, ...params] = input[i].split(' / ');

        switch (command) {
            case 'Execute':
                if (
                    farmers[farmerName].area === params[0]
                    && farmers[farmerName].tasks.includes(params[1])
                ) {
                    console.log(`${farmerName} has executed the task: ${params[1]}!`);
                } else {
                    console.log(`${farmerName} cannot execute the task: ${params[1]}.`);
                }
                break;
            case 'Change Area':
                farmers[farmerName].area = params[0];
                console.log(`${farmerName} has changed their work area to: ${params[0]}`);
                break;
            case 'Learn Task':
                if (farmers[farmerName].tasks.includes(params[0])) {
                    console.log(`${farmerName} already knows how to perform ${params[0]}.`);
                } else {
                    farmers[farmerName].tasks += ',' + params[0];
                    console.log(`${farmerName} has learned a new task: ${params[0]}.`);
                }
                break;
            case 'End':
                break;
        }
    }    

    for (let farmer of Object.entries(farmers)) {
        let [farmerName, {area, tasks}] = farmer;
        console.log(`Farmer: ${farmerName}, Area: ${area}, Tasks: ${tasks.split(',').join(', ')}`);
    }
}

solve([
    "3",
    "Alex apiary harvesting,honeycomb",
    "Emma barn milking,cleaning",
    "Chris garden planting,weeding",
    "Execute / Alex / apiary / harvesting",
    "Learn Task / Alex / beeswax",
    "Execute / Alex / apiary / beeswax",
    "Change Area / Emma / apiary",
    "Execute / Emma / apiary / milking",
    "Execute / Chris / garden / watering",
    "Learn Task / Chris / pruning",
    "Execute / Chris / garden / pruning",
    "End"
  ]
  
);