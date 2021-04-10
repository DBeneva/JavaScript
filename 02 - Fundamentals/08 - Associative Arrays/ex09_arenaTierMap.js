function arenaTier(input) {
    let pool = new Map();

    while (input.length > 0) {
        let current = input.shift();
        
        if (current == 'Ave Cesar') {
            break;
        }
        
        if (current.includes('->')) {
            let [gladiator, technique, skill] = current.split(' -> ');
            skill = Number(skill);

            if (!pool.has(gladiator)) {
                pool.set(gladiator, new Map());
            }

            if (!pool.get(gladiator).has(technique)) {
                pool.get(gladiator).set(technique, skill);
            } else {
                pool.get(gladiator).set(technique, Math.max(pool.get(gladiator).get(technique), skill));
            }

        } else if (current.includes(' vs ')) {
            let [gladiator1, gladiator2] = current.split(' vs ');

            if (pool.has(gladiator1) && pool.has(gladiator2)) {
                for (let technique of pool.get(gladiator1).keys()) {
                    if (pool.get(gladiator2).has(technique)) {
                        if (total(pool.get(gladiator1)) > total(pool.get(gladiator2))) {
                            pool.delete(gladiator2);
                        } else if (total(pool.get(gladiator2)) > total(pool.get(gladiator1))) {
                            pool.delete(gladiator1);
                        }
                        break;
                    }
                }
            }
        }
    }

    [...pool]
        .sort((a, b) => total(b[1]) - total(a[1]) || a[0].localeCompare(b[0]))
        .map(gladiator => {
            console.log(`${gladiator[0]}: ${total(gladiator[1])} skill`);
            
            [...gladiator[1]]
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .map(skill => console.log(`- ${skill[0]} <!> ${skill[1]}`));
        });

    function total(map) {
        return [...map.values()].reduce((a, b) => a + b, 0);
    }
}

arenaTier([
    'Pesho -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
]);