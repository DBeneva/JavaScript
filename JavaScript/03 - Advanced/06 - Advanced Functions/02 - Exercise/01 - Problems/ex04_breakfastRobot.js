function breakfastRobot() {
    let supplies = {
        protein: 0,
        carbohydrate: 0,
        fat: 0,
        flavour: 0
    };

    let recipies = {
        apple: { carbohydrate: 1, flavour: 2 },
        lemonade: { carbohydrate: 10, flavour: 20 },
        burger: { carbohydrate: 5, fat: 7, flavour: 3 },
        eggs: { protein: 5, fat: 1, flavour: 1 },
        turkey: { protein: 10, carbohydrate: 10, fat: 10, flavour: 10 }
    };

    let commands = {
        restock(microel, qty) {
            supplies[microel] += Number(qty);
            return 'Success';
        },
        prepare(recipe, qty) {
            for (let ingr in recipies[recipe]) {
                let neededIngr = recipies[recipe][ingr] * Number(qty);
                supplies[ingr] -= neededIngr;

                if (supplies[ingr] < 0) {
                    return `Error: not enough ${ingr} in stock`;
                }
            }
            
            return 'Success';
        },
        report() {
            let output = [];

            for (let microel in supplies) {
                output.push(`${microel}=${supplies[microel]}`);
            }

            return output.join(' ');
        }
    };

    return function manager(input) {
        let [cmd, ...params] = input.split(' ');

        if (commands[cmd]) {
            return commands[cmd](...params);
        }
    }
}

let manager = breakfastRobot();
console.log(manager("restock carbohydrate 10"));
console.log(manager("restock flavour 10"));
console.log(manager("prepare apple 1"));
console.log(manager("restock fat 10"));
console.log(manager("prepare burger 1"));
console.log(manager("report"));


