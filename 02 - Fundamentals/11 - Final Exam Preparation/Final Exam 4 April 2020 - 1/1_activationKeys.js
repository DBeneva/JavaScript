function activationKeys(input) {
    input = input.slice(0, input.indexOf('Generate'));
    let rawKey = input.shift();

    let actions = {
        Contains(rawKey, tokens) {
            let [substring] = tokens;
            let output = rawKey.includes(substring) ?
                `${rawKey} contains ${substring}` : `Substring not found!`;
            console.log(output);
            return rawKey;
        },
        Flip(rawKey, [upperLower, start, end]) {
            [start, end] = [Number(start), Number(end)];
            rawKey = upperLower == 'Upper' ?
                rawKey.substring(0, start) + rawKey.substring(start, end).toUpperCase() + rawKey.substring(end) :
                rawKey.substring(0, start) + rawKey.substring(start, end).toLowerCase() + rawKey.substring(end);
            console.log(rawKey);
            return rawKey;
        },
        Slice(rawKey, [start, end]) {
            [start, end] = [Number(start), Number(end)];
            rawKey = rawKey.substring(0, start) + rawKey.substring(end);
            console.log(rawKey);
            return rawKey;
        }
    };

    input.forEach(instruction => {
        let [command, ...tokens] = instruction.split('>>>');
        rawKey = actions[command](rawKey, tokens);
    });

    console.log(`Your activation key is: ${rawKey}`);
}

activationKeys([
    'abcdefghijklmnopqrstuvwxyz',
    'Slice>>>2>>>6',
    'Flip>>>Upper>>>3>>>14',
    'Flip>>>Lower>>>5>>>7',
    'Contains>>>def',
    'Contains>>>deF',
    'Generate'
]
);