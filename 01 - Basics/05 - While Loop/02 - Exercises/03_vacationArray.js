function vacation(input) {
    const moneyNeeded = Number(input.shift());
    const days = (input.length - 1) / 2;
    const money = getMoney();
    const tooManySpendingDays = areTooMany();
    
    if (tooManySpendingDays) {
        console.log(`You can't save the money.\n${days}`);
    } else if (money >= moneyNeeded) {
        console.log(`You saved the money for ${days} days.`);
    }

    function getMoney() {
        return input
            .map((v, i) => i % 2 == 0 ? input[i - 1] == 'spend' ? -Number(v) : Number(v) : '')
            .filter(x => x != '')
            .reduce((a, c) => Math.max((a + c), 0), 0);
    }

    function areTooMany() {
        const fiveInARow = Array.from(Array(5).fill('spend')).join(', ');
        
        return input
            .filter(x => x == 'save' || x == 'spend')
            .join(', ')
            .includes(fiveInARow);
    }
}

vacation([2000, 1000, 'spend', 1200, 'save', 2000]);
console.log('====================');
vacation([
    110,
    60,
    'spend',
    10,
    'spend',
    10,
    'spend',
    10,
    'spend',
    10,
    'spend',
    10
]);