function lettersCombination(input) {
    let start = input[0].charCodeAt();
    let finish = input[1].charCodeAt();
    let toBeLeftOut = input[2].charCodeAt();
    let numberOfCombinations = 0;
    let outputLine = '';

    for (let char1 = start; char1 <= finish; char1++) {
        for (let char2 = start; char2 <= finish; char2++) {
            for (let char3 = start; char3 <= finish; char3++) {
                if (char1 != toBeLeftOut && char2 != toBeLeftOut && char3 != toBeLeftOut) {
                    outputLine += String.fromCharCode(char1) + String.fromCharCode(char2) + String.fromCharCode(char3) + " ";
                    numberOfCombinations++;
                }
            }
        }
    }

    console.log(outputLine, numberOfCombinations);
}

lettersCombination(['a', 'c', 'b']);