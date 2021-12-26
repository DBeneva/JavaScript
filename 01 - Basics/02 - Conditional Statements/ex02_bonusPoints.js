function printBonusPoints(num) {
    num = Number(num);
    const bonusPoints = getBonus() + getAdditionalBonus();

    console.log(`${bonusPoints}\n${num + bonusPoints}`);
    
    function getBonus() {
        if (num <= 100) return 5;
        else if (num <= 1000) return num * 0.2;
        else if (num > 1000) return num * 0.1;
    }
    
    function getAdditionalBonus() {
        if (num % 2 == 0) return 1;
        else if (num % 5 == 0) return 2;
        else return 0;
    }
}

function printBonusPointsTernary(num) {
    num = Number(num);
    const bonusPoints = getBonus() + getAdditionalBonus();

    console.log(`${bonusPoints}\n${num + bonusPoints}`);

    function getBonus() {
        return num <= 100
            ? 5
            : num <= 1000
                ? num * 0.2
                : num * 0.1;
    }

    function getAdditionalBonus() {
        return num % 2 == 0
            ? 1
            : num % 5 == 0
                ? 2
                : 0;
    }
}

printBonusPoints('2703');
console.log('====================');
printBonusPointsTernary('20');