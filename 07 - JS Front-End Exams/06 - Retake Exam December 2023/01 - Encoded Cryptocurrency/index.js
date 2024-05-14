function handleCryptocurrency(input) {
    let encodedMessage = input.shift();

    const commands = {
        'TakeEven': () => {
            encodedMessage = encodedMessage
                .split('')
                .filter((v, i) => i % 2 === 0)
                .join('');

            console.log(encodedMessage);
        },
        'ChangeAll': (substring, replacement) => {
            while (encodedMessage.includes(substring)) {
                encodedMessage = encodedMessage.replace(substring, replacement);
            }

            console.log(encodedMessage);
        },
        'Reverse': (substring) => {
            if (encodedMessage.includes(substring)) {
                const substringIndex = encodedMessage.indexOf(substring);
                const encodedMessageArray = encodedMessage.split('');
                encodedMessageArray.splice(substringIndex, substring.length);
                encodedMessage = encodedMessageArray.join('') + substring.split('').reverse().join('');
                console.log(encodedMessage);
            } else {
                console.log('error');
            }
        },
        'Buy': () => {
            console.log(`The cryptocurrency is: ${encodedMessage}`);
        }
    };

    for (let inputLine of input) {
        const [command, substring, replacement] = inputLine.split('?');
        commands[command](substring, replacement);
    }
}

handleCryptocurrency(["PZDfA2PkAsakhnefZ7aZ", 
"TakeEven",
"TakeEven",
"TakeEven",
"ChangeAll?Z?X",
"ChangeAll?A?R",
"Reverse?PRX",
"Buy"]);