function arenaTier(input) {
    let pool = {};

    while (input.length > 0) {
        let current = input.shift();
        
        if (current == 'Ave Cesar') {
            break;
        }
        
        if (current.includes('->')) {
            let [gladiator, technique, skill] = current.split(' -> ');
            skill = Number(skill);

            if (!pool.hasOwnProperty(gladiator)) {
                pool[gladiator] = {};
            }

            if (!pool[gladiator].hasOwnProperty(technique)) {
                pool[gladiator][technique] = skill;
            } else {
                pool[gladiator][technique] = Math.max(pool[gladiator][technique], skill);
            }

        } else if (current.includes(' vs ')) {
            let [gladiator1, gladiator2] = current.split(' vs ');

            if (pool.hasOwnProperty(gladiator1) && pool.hasOwnProperty(gladiator2)) {
                for (let technique in pool[gladiator1]) {
                    if (pool[gladiator2].hasOwnProperty(technique)) {
                        if (total(pool[gladiator1]) > total(pool[gladiator2])) {
                            delete pool[gladiator2];
                        } else if (total(pool[gladiator2]) > total(pool[gladiator1])) {
                            delete pool[gladiator1];
                        }
                        break;
                    }
                }
            }
        }
    }

    Object.entries(pool)
        .sort((a, b) => total(b[1]) - total(a[1]) || a[0].localeCompare(b[0]))
        .map(gladiator => {
            console.log(`${gladiator[0]}: ${total(gladiator[1])} skill`);
            
            Object.entries(gladiator[1])
                .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
                .map(skill => console.log(`- ${skill[0]} <!> ${skill[1]}`));
        });


    function total(object) {
        return Object.values(object).reduce((a, b) => a + b, 0);
    }
}

arenaTier([
    'Peter -> BattleCry -> 400',
    'Alex -> PowerPunch -> 300',
    'Stefan -> Duck -> 200',
    'Stefan -> Tiger -> 250', '',
    'Ave Cesar', 'blabla'
]);