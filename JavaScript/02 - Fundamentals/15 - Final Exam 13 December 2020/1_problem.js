function problem(input) {
    let string = input.shift();
    input = input.slice(0, input.indexOf('End'));

    let actions = {
        Translate([char, replacement]) {
            while (string.includes(char)) {
                string = string.replace(char, replacement);
            }

            return console.log(string);
        },
        Includes([substring]) {
            console.log(string.includes(substring) ? 'True' : 'False');
        },
        Start([substring]) {
            console.log(string.startsWith(substring) ? 'True' : 'False');
        },
        Lowercase() {
            return console.log(string = string.toLowerCase());
        },
        FindIndex([char]) {
            console.log(string.lastIndexOf(char));
        },
        Remove([start, count]) {
            [start, count] = [start, count].map(Number);
            return console.log(string = string.substring(0, start) + string.substring(start + count));
        }
    };

    input.forEach(instruction => {
        let [command, ...params] = instruction.split(' ');
        if (actions[command]) {
            actions[command](params);
        }
    });
}

problem([
    '//Thi5 I5 MY 5trING!//',
    'Translate 5 s',
    'Includes string',
    'Start //This',
    'Lowercase',
    'FindIndex i',
    'Remove 0 10',
    'End'
]);