Object.assign(window.game, (function () {
    const playerSlot = document.getElementById('player');
    const enemySlot = document.getElementById('enemies');

    const player = game.createCharacter('player');
    
    const encounterController = game.encounterController(enemySlot, player);
    
    const controls = e('div', { id: 'controls' },
    e('button', { onClick: encounterController.onPlayerAttack }, 'Attack')
    );
    disableControls();
    
    
    playerSlot.appendChild(player.element);
    playerSlot.appendChild(controls);

    game.events.onBeginTurn.subscribe(onBeginTurn);
    game.events.onEncounterEnd.subscribe(onEncounterEnd);

    let difficulty = 1;
    encounterController.enter(game.generateEncounter(difficulty));

    function onBeginTurn(controller) {
        if (controller.character.ai) {
            console.log('AI controlled');
            disableControls();
            setTimeout(() => {
                encounterController.onEnemyAttack();
                encounterController.selectTarget({ target: player.element });
            }, 500);
        } else {
            console.log('Player turn');
            enableControls();
        }
    }

    function onEncounterEnd(victory) {
        if (victory) {
            alert('Enemies defeated!');
            difficulty++;
            encounterController.enter(game.generateEncounter(difficulty))
            disableControls();
        } else {
            alert('Game over!');
            disableControls();
        }
    }

    function enableControls() {
        [...controls.children].forEach(c => c.disabled = false);
    }

    function disableControls() {
        [...controls.children].forEach(c => c.disabled = true);
    }
})());
