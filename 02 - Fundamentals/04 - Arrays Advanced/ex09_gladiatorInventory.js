function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    while (input.length > 0) {
        let instruction = input.shift().split(' ');
        let command = instruction.shift();
        let equipment = instruction.shift();
        let upgrade = '';

        if (equipment.includes('-')) {
            let equipmentArray = equipment.split('-');
            equipment = equipmentArray[0];
            upgrade = equipmentArray[1];
        }

        let index = inventory.indexOf(equipment);

        switch (command) {
            case 'Buy':
                if (!inventory.includes(equipment)) {
                    inventory.push(equipment);
                }
                break;

            case 'Trash':
                if (inventory.includes(equipment)) {
                    inventory.splice(index, 1);
                }
                break;

            case 'Repair':
                if (inventory.includes(equipment)) {
                    inventory.splice(index, 1);
                    inventory.push(equipment);
                }
                break;

            case 'Upgrade':
                if (inventory.includes(equipment)) {
                    inventory.splice(index + 1, 0, `${equipment}:${upgrade}`);
                }
                break;
        }
    }

    console.log(inventory.join(' '));
}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']);