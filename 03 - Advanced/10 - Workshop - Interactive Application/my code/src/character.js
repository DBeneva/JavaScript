Object.assign(window.game, (function() {
    const templates = {
        player: {
            name: 'Player',
            img: 'player.png',
            hp: 100,
            dmg: 25
        },
        rat: {
            name: 'Giant Rat',
            level: 1,
            img: 'rat.png',
            ai: true,
            hp: 30,
            dmg: 10
        },
        skeleton: {
            name: 'Skeleton',
            level: 2,
            img: 'skeleton.png',
            ai: true,
            hp: 50,
            dmg: 15
        },
        goblin: {
            name: 'Goblin',
            level: 4,
            img: 'goblin.png',
            ai: true,
            hp: 100,
            dmg: 25
        }
    };
    
    return {
        createCharacter,
        templates
    };

    function createCharacter(type) {
        const character = Object.assign({
            alive: true,
            attack,
            takeDamage
        }, templates[type]);
        character.maxHp = character.hp;
    
        const element = createCharacterCard(character);
    
        return {
            character,
            element
        };
    
        function attack(target) {
            console.log(`${character.name} attacks ${target.name} for ${character.dmg}`);
            target.takeDamage(character.dmg);
        }
    
        function takeDamage(incomingDmg) {
            console.log(`${character.name} took ${incomingDmg} damage`);
            character.hp = Math.max(character.hp - incomingDmg, 0);
            character.alive = character.hp == 0 ? false : true;
            element.update();
        }
    }
    
    function createCharacterCard(character) {
        const stats = {
            hp: e('span', {}, `${character.hp} / ${character.maxHp}`)
        };
    
        const element = e('article', { className: 'character-card' },
            e('div', { className: 'portrait' },
                e('img', { src: `assets/${character.img}` })),
            e('div', { className: 'description' },
                e('h3', {}, character.name),
                e('ul', { className: 'stats' },
                    e('li', {}, 'HP: ',
                        e('span', {}, stats.hp)
                    ),
                    e('li', {}, 'Damage: ',
                        e('span', {}, character.dmg)
                    )
                )
            )
        );
    
        element.update = update;
    
        return element;
    
        function update() {
            stats.hp.textContent = `${character.hp} / ${character.maxHp}`;
    
            if (character.alive == false) {
                element.classList.add('wasted');
            }
        }
    }
})());
