function bonusPoints(num) {
    num = Number(num);
    let bonusPoints = 0;

    if (num <= 100) {
        bonusPoints = 5;
    } else if (num <= 1000) {
        bonusPoints = num * 0.2;
    } else if (num > 1000) {
        bonusPoints = num * 0.1;
    }

    if (num % 2 == 0) {
        bonusPoints += 1;
    } else if (num % 5 == 0) {
        bonusPoints += 2;
    }

    console.log(bonusPoints);
    console.log(num + bonusPoints);
}

function bonusPointsTernary(num) {
    num = Number(num);
    let bonusPoints = getBonus() + getAdditionalBonus();

    console.log(`${bonusPoints}\n${num + bonusPoints}`);

    function getBonus() {
        return num <= 100 ? 5 :
            num <= 1000 ? num * 0.2 :
                num * 0.1;
    }

    function getAdditionalBonus() {
        return num % 2 == 0 ? 1 :
            num % 5 == 0 ? 2 : 0;
    }
}

bonusPoints('20');

console.log('====================');

bonusPointsTernary('20');