function triplesOfLatinLetters(n) {
    n = Number(n);

    for (let i = 97; i < 97 + n; i++) {
        for (let j = 97; j < 97 + n; j++) {
            for (let k = 97; k < 97 + n; k++) {
                let outputLine = String.fromCharCode(i);
                outputLine += String.fromCharCode(j);
                outputLine += String.fromCharCode(k);
                
                console.log(outputLine);
            }
        }
    }
}

triplesOfLatinLetters(3);