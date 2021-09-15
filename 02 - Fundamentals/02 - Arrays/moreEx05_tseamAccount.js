function tseamAccount(input) {
    let index = 0;
    let account = input[index].split(' ');
    index++;

    while (input[index] != 'Play!') {
        let currentInputElement = input[index].split(' ');
        index++;
        let currentCommand = currentInputElement[0];
        let currentGame = currentInputElement[1];
        let currentGameIndex = account.indexOf(currentGame);

        switch (currentCommand) {
            case 'Install':
                if (!account.includes(currentGame)) {
                    account.push(currentGame);
                }
                break;

            case 'Uninstall':
                if (account.includes(currentGame)) {
                    account.splice(currentGameIndex, 1);
                }
                break;

            case 'Update':
                if (account.includes(currentGame)) {
                    account.splice(currentGameIndex, 1);
                    account.push(currentGame);
                }
                break;
                
            case 'Expansion':
                let expansion = currentGame.split('-');
                currentGame = expansion[0];
                
                if (account.includes(currentGame)) {
                    currentGameIndex = account.indexOf(currentGame);
                    let expandedGame = expansion.join(':');
                    account.splice(currentGameIndex + 1, 0, expandedGame);
                }
                break;
        }
    }

    console.log(account.join(' '));
}

tseamAccount(['CS WoW Diablo',
    'Install LoL',
    'Uninstall WoW',
    'Update Diablo',
    'Expansion CS-Go',
    'Play!']);