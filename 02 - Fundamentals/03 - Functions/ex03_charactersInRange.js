function charactersInRange(char1, char2) {
    console.log(printCharactersBetween(char1, char2));

    function printCharactersBetween(char1, char2) {
        let code1 = char1.charCodeAt();
        let code2 = char2.charCodeAt();
        let start = Math.min(code1, code2);
        let end = Math.max(code1, code2);
        let printedCharacters = '';

        for (let i = start + 1; i < end; i++) {
            printedCharacters += String.fromCharCode(i) + ' ';
        }

        return printedCharacters;
    }
}

charactersInRange('#', ':');