function disneylandJourney(input) {
    let [expenses, months] = input.map(Number);
    let savedMoney = 0;

    for (let i = 1; i <= months; i++) {
        savedMoney = i % 2 == 1 && i != 1 ? savedMoney - 0.16 * savedMoney : savedMoney;
        savedMoney = i % 4 == 0 ? savedMoney + savedMoney / 4 : savedMoney;
        savedMoney += expenses / 4;
    }

    let difference = Math.abs(savedMoney - expenses).toFixed(2);
    let printLine = savedMoney >= expenses ?
        `Bravo! You can go to Disneyland and you will have ${difference}lv. for souvenirs.` :
        `Sorry. You need ${difference}lv. more.`;
    
    console.log(printLine);
}

disneylandJourney(['1000', '4']);