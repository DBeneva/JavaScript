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

printBonusPoints('2703');