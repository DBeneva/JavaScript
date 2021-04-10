function secretChat(input) {
    let message = input.shift();
    
    let actions = {
        InsertSpace(string, [index]) {
            let newString = '';
            for (let i = 0; i < string.length; i++) {
                newString += i == Number(index) ? ' ' + string[i] : string[i];
            }
            console.log(newString);
            return message = newString;
        },
        Reverse(string, [substring]) {
            if (string.includes(substring)) {
                let first = string.substring(0, string.indexOf(substring));
                let second = string.substring(string.indexOf(substring) + substring.length);
                string = first + second + substring.split('').reverse().join('');
                console.log(string);
            } else {
                console.log(`error`);
            }
            return message = string;
        },
        ChangeAll(string, [substring, replacement]) {
            string = string.replace(new RegExp(substring, 'g'), replacement);
            console.log(string);
            return message = string;
        },
        Reveal() {
            console.log(`You have a new text message: ${message}`);
        }
    };

    input.forEach(instruction => {
        let [command, ...params] = instruction.split(':|:');
        actions[command](message, params);
    });
}

secretChat([
    'Hiware?uiy',
    'ChangeAll:|:i:|:o',
    'Reverse:|:?uoy',
    'Reverse:|:jd',
    'InsertSpace:|:3',
    'InsertSpace:|:7',
    'Reveal'
  ]
  );