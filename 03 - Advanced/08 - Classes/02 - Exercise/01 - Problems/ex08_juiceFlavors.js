function juiceFlavors(input) {
    let bottles = new Map();
    let juices = {};

    input.forEach(line => {
        let [juice, qty] = line.split(' => ');
        
        if (!juices[juice]) {
            juices[juice] = 0;
        }

        juices[juice] += Number(qty);

        while (juices[juice] >= 1000) {
            if (!bottles.has(juice)) {
                bottles.set(juice, 0);
            }

            bottles.set(juice, bottles.get(juice) + 1);
            juices[juice] -= 1000;
        }
    });

    [...bottles].forEach(([juice, qty]) => {
        console.log(`${juice} => ${qty}`);
    });
}

juiceFlavors(['Kiwi => 234',
'Pear => 2345',
'Watermelon => 3456',
'Kiwi => 4567',
'Pear => 5678',
'Watermelon => 6789']);