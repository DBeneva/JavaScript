function fiveSpecialLetters(input) {
    let start = Number(input[0]);
    let finish = Number(input[1]);
    let pattern = ' abcde';
    let currentCombination = '';
    let outputLine = '';
    let found = false;


    for (let letter1 = 1; letter1 <= 5; letter1++) {
        for (let letter2 = 1; letter2 <= 5; letter2++) {
            for (let letter3 = 1; letter3 <= 5; letter3++) {
                for (let letter4 = 1; letter4 <= 5; letter4++) {
                    for (let letter5 = 1; letter5 <= 5; letter5++) {
                        currentCombination = `${pattern[letter1]}${pattern[letter2]}${pattern[letter3]}${pattern[letter4]}${pattern[letter5]}`;
                        let combinationToBeWeighed = '';
                        let weight = 0;
                        combinationToBeWeighed += pattern[letter1];

                        if (letter2 != letter1) {
                            combinationToBeWeighed += pattern[letter2];
                        }
                        
                        if (letter3 != letter1 && letter3 != letter2) {
                            combinationToBeWeighed += pattern[letter3];
                        }
                        
                        if (letter4 != letter1 && letter4 != letter2 && letter4 != letter3) {
                            combinationToBeWeighed += pattern[letter4];
                        }
                        
                        if (letter5 != letter1 && letter5 != letter2 && letter5 != letter3 && letter5 != letter4) {
                            combinationToBeWeighed += pattern[letter5];
                        }
                        
                        for (let i = 0; i < combinationToBeWeighed.length; i++) {
                            let multiplier = 0;
                        
                            switch (combinationToBeWeighed[i]) {
                                case 'a': multiplier = 5; break;
                                case 'b': multiplier = -12; break;
                                case 'c': multiplier = 47; break;
                                case 'd': multiplier = 7; break;
                                case 'e': multiplier = -32; break;
                            }

                            weight += multiplier * (i + 1);
                        }

                        if (weight >= start && weight <= finish) {
                            outputLine += currentCombination + ' ';
                            found = true;
                        }
                    }
                }
            }
        }
    }

    if (found) {
        console.log(outputLine);
    } else {
        console.log('No');
    }
}

fiveSpecialLetters(['300', '400']);