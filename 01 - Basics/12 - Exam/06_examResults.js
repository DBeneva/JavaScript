function examResults(input) {
    let index = 0;
    let cheating;

    while (input[index] != 'Midnight' && input[index] != undefined) {
        let name = input[index];
        index++;
        let score = 0;

        for (let task = 1; task <= 6; task++) {
            let currentScore = Number(input[index]);
            index++;
            cheating = false;
        
            if (currentScore < 0) {
                console.log(`${name} was cheating!`);
                cheating = true;
                break;
            }
        
            score += currentScore;
        }
        
        score = Math.trunc(score / 600 * 100);
        score *= 0.06;
        
        if (score < 3) {
            score = 2;
        }
        
        if (score >= 5 && !cheating) {
            console.log('===================');
            console.log('|   CERTIFICATE   |');
            console.log(`|    ${score.toFixed(2)}/6.00    |`);
            console.log('===================');
            console.log(`Issued to ${name}`);
        } else if (!cheating) {
            console.log(`${name} - ${score.toFixed(2)}`);
        }
    }
}

examResults(['Andy', '50', '50', '20', '10', '10', '0']);