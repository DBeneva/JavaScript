function dartsTournament(input) {
    let index = 0;
    let score = Number(input[index]);
    index++;
    let bullseye = false;
    let moves = 0;

    while (score > 0) {
        moves++;
        let sector = input[index];
        index++;
        let currentScore = Number(input[index]);
        index++;
        
        switch (sector) {
            case 'number section': score -= currentScore; break;
            case 'double ring': score -= currentScore * 2; break;
            case 'triple ring': score -= currentScore * 3; break;
            case 'bullseye': bullseye = true; break;
        }
        
        if (bullseye) {
            break;
        }
    }

    if (score == 0) {
        console.log(`Congratulations! You won the game in ${moves} moves!`);
    } else if (bullseye) {
        console.log(`Congratulations! You won the game with a bullseye in ${moves} moves!`);
    } else {
        console.log(`Sorry, you lost. Score difference: ${Math.abs(score)}.`);
    }
}

dartsTournament(['150', 'double ring', '20',
    'triple ring', '10', 'number section', '20',
    'triple ring', '20']);