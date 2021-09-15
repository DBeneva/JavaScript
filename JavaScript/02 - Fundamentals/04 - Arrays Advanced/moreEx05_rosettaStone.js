function rosettaStone(input) {
    let templateLength = Number(input.shift());
    let template = [];

    for (let i = 0; i < templateLength; i++) {
        template.push(input.shift().split(' ').map(Number));
    }

    let encodedMessage = [];
    
    while (input.length > 0) {
        encodedMessage.push(input.shift().split(' ').map(Number));
    }

    for (let row = 0; row < encodedMessage.length; row++) {
        for (let col = 0; col < encodedMessage[0].length; col++) {
            encodedMessage[row][col] += template[row % templateLength][col % template[0].length];
            let code = encodedMessage[row][col] % 27;
    
            if (code == 0) {
                encodedMessage[row][col] = ' ';
            } else {
                code += 64;
                encodedMessage[row][col] = String.fromCharCode(code);
            }
        }
    }

    let outputLine = '';

    for (el of encodedMessage) {
        outputLine += el.join('');
    }

    console.log(outputLine);
}

rosettaStone(['1',
    '1 3 13',
    '12 22 14 13 25 0 4 24 23',
    '18 24 2 25 22 0 0 11 18',
    '8 25 6 26 8 23 13 4 14',
    '14 3 14 10 6 1 6 16 14',
    '11 12 2 10 24 2 13 24 0',
    '24 24 10 14 15 25 18 24 12',
    '4 24 0 8 4 22 19 22 14',
    '0 11 18 26 1 19 18 13 15',
    '8 15 14 26 24 14 26 24 14' ]);