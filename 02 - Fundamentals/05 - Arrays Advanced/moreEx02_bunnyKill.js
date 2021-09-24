function bunnyKill(input) {
    let bombBunnies = input.pop().split(' '); 
    let hangar = [];

    for (let i = 0; i < input.length; i++) {
        hangar[i] = input[i].split(' ').map(Number);
    }

    let hangarRows = hangar.length;
    let hangarCols = hangar[0].length;
    let snowballDamage = 0;
    let bunniesKilled = 0;

    for (let i = 0; i < bombBunnies.length; i++) {
        let [bombRow, bombCol] = bombBunnies[i].split(',').map(Number);
        let damage = hangar[bombRow][bombCol];

        if (damage <= 0) {
            continue;
        }

        hangar[bombRow][bombCol] = 0;
        snowballDamage += damage;
        bunniesKilled++;

        if (bombRow - 1 >= 0 && bombCol - 1 >= 0) {
            hangar[bombRow - 1][bombCol - 1] -= damage;
        }

        if (bombCol - 1 >= 0) {
            hangar[bombRow][bombCol - 1] -= damage;
        }
        
        if (bombRow + 1 < hangarRows && bombCol - 1 >= 0) {
            hangar[bombRow + 1][bombCol - 1] -= damage;
        }
        
        if (bombRow - 1 >= 0) {
            hangar[bombRow - 1][bombCol] -= damage;
        }      
        
        if (bombRow + 1 < hangarRows) {
            hangar[bombRow + 1][bombCol] -= damage;
        }
        
        if (bombRow - 1 >= 0 && bombCol + 1 < hangarCols) {
            hangar[bombRow - 1][bombCol + 1] -= damage;
        }
        
        if (bombCol + 1 < hangarCols) {
            hangar[bombRow][bombCol + 1] -= damage;
        }
        
        if (bombRow + 1 < hangarRows && bombCol + 1 < hangarCols) {
            hangar[bombRow + 1][bombCol + 1] -= damage;
        }        
    }

    for (let row = 0; row < hangarRows; row++) {
        for (let column = 0; column < hangarCols; column++) {
            if (hangar[row][column] > 0) {
                snowballDamage += hangar[row][column];
                bunniesKilled++;
            }
        }
    }

    console.log(snowballDamage);
    console.log(bunniesKilled);
}

bunnyKill(['5 10 15 20',
    '10 10 10 10',
    '10 15 10 10',
    '10 10 10 10',
    '2,2 1,1']);