function imitationGame(input) {
    let message = input.shift();
    input = input.slice(0, input.indexOf('Decode'));

    let actions = {
        Move([n]) {
            n = Number(n);
            
            if (message.length > n) {
                message = message.substring(n) + message.substring(0, n);
            }
            
            return message;
        },
        Insert([index, value]) {
            index = Number(index);

            if (index == message.length) {
                message += value;
            } else if (index < message.length) {
                message = message.substring(0, index) + value + message.substring(index);
            }
            
            return message;
        },
        ChangeAll([substring, replacement]) {
            while (message.includes(substring)) {
                message = message.replace(substring, replacement);
            }

            return message;
        }
    };

    input.forEach(instruction => {
        let [command, ...params] = instruction.split('|');

        if (actions[command]) {
            actions[command](params);
        }
    });

    console.log(`The decrypted message is: ${message}`);
}

imitationGame([
    'zzHe',
    'ChangeAll|z|l',
    'Insert|2|o',
    'Move|3',
    'Decode'
  ]  
);