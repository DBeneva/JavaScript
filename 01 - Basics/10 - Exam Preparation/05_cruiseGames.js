function cruiseGames(input) {
    let name = input[0];
    let gamesPlayed = Number(input[1]);
    let numberVolleyballGames = 0;
    let numberTennisGames = 0;
    let numberBadmintonGames = 0;
    let scoreVolleyball = 0;
    let scoreTennis = 0;
    let scoreBadminton = 0;
    let scoreTotal = 0;
    let index = 2;

    for (let game = 1; game <= gamesPlayed; game++) {
        let gameName = input[index];
        index++;
        let scoreCurrent = Number(input[index]);
        index++;
        
        switch (gameName) {
            case 'volleyball':
                scoreVolleyball += scoreCurrent + scoreCurrent * 7 / 100;
                scoreTotal += scoreCurrent + scoreCurrent * 7 / 100;
                numberVolleyballGames++;
                break;

            case 'tennis':
                scoreTennis += scoreCurrent + scoreCurrent * 5 / 100;
                scoreTotal += scoreCurrent + scoreCurrent * 5 / 100;
                numberTennisGames++;
                break;

            case 'badminton':
                scoreBadminton += scoreCurrent + scoreCurrent * 2 / 100;
                scoreTotal += scoreCurrent + scoreCurrent * 2 / 100;
                numberBadmintonGames++;
                break;
        }
    }

    let scoreAverageVolleyball = scoreVolleyball / numberVolleyballGames;
    let scoreAverageTennis = scoreTennis / numberTennisGames;
    let scoreAverageBadminton = scoreBadminton / numberBadmintonGames;

    if (scoreAverageVolleyball >= 75 && scoreAverageTennis >= 75 && scoreAverageBadminton >= 75) {
        console.log(`Congratulations, ${name}! You won the cruise games with ${Math.floor(scoreTotal)} points.`);
    } else {
        console.log(`Sorry, ${name}, you lost. Your points are only ${Math.floor(scoreTotal)}.`);
    }
}

cruiseGames(['Ivan', '7', 'volleyball', '70', 'tennis', '100',
    'badminton', '64', 'volleyball', '125', 'tennis', '62',
    'tennis', '72', 'badminton', '87']);