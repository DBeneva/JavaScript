function bakingCompetition(input) {
    let index = 0;
    let participantsTotal = Number(input[index]);
    index++;
    let pastryNumberTotal = 0;
    let money = 0;
    let name = '';

    for (let participant = 1; participant <= participantsTotal; participant++) {
        if (input[index] == 'Stop baking!') {
            index++;
        }

        let cookiesNumber = 0;
        let cakesNumber = 0;
        let wafflesNumber = 0;
        name = input[index];
        index++;
        
        while (input[index] != 'Stop baking!') {
            let pastryType = input[index];
            index++;
            let pastryNumber = Number(input[index]);
            index++;
            pastryNumberTotal += pastryNumber;

            switch (pastryType) {
                case 'cookies':
                    cookiesNumber += pastryNumber;
                    money += pastryNumber * 1.5;
                    break;
                case 'cakes':
                    cakesNumber += pastryNumber;
                    money += pastryNumber * 7.8;
                    break;
                case 'waffles':
                    wafflesNumber += pastryNumber;
                    money += pastryNumber * 2.3;
                    break;
            }
        }

        console.log(`${name} baked ${cookiesNumber} cookies, ${cakesNumber} cakes and ${wafflesNumber} waffles.`);
    }

    console.log(`All bakery sold: ${pastryNumberTotal}`);
    console.log(`Total sum for charity: ${money.toFixed(2)} lv.`);
}

bakingCompetition(['3', 'George', 'cookies', '10', 'Stop baking!',
    'Annie', 'waffle', '8', 'Stop baking!',
    'Ivan', 'cookies', '6', 'waffles', '3', 'Stop baking!']);