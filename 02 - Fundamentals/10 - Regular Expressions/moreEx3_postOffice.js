function postOffice([input]) {
    let [first, second, third] = input.split('|');
    let words = {};

    let capitalLetters = first.match(/([#\$%\*\&])[A-Z]+\1/g)[0].split('');
    capitalLetters = capitalLetters
        .splice(1, capitalLetters.length - 2)
        .forEach(letter => {
            words[letter] = 0;
        });
        
    let numbers = second.match(/\d{2}:\d{2}/g);
    numbers.forEach(number => {
        let [code, length] = number.split(':').map(Number);
        if (words.hasOwnProperty(String.fromCharCode(code))) {
            words[String.fromCharCode(code)] = length;
        }
    });

    let message = '';
    Object.keys(words).forEach(letter => {
        let validWord = `(?<=\\s)${letter}[^\\s]{${words[letter]}}(?=\\s)`;
        message += ` ${third} `.match(new RegExp(validWord, 'g')) + '\n';
    });
    console.log(message);
}

postOffice([
    'sdsGGasAOTPWEEEdas$AOTP$|a65:1.2s65:03d79:01ds84:02! -80:07++ABs90:1.1|adsaArmyd Gara So La Arm Armyw21 Argo O daOfa Or Ti Sar saTheww The Parahaos'
    ]
    );