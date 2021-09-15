function arrayManipulator(numbers, commands) {

    while (commands.length > 0) {
        let currentInstruction = commands.shift().split(' ');
        let currentCommand = currentInstruction.shift();
        let commandNumbers = currentInstruction.map(Number);

        switch (currentCommand) {
            case 'add':
                numbers.splice(commandNumbers.shift(), 0, commandNumbers.shift());
                break;

            case 'addMany':
                let index = commandNumbers.shift();

                while (commandNumbers.length > 0) {
                    numbers.splice(index, 0, commandNumbers.shift());
                    index++;
                }
                break;

            case 'contains':
                console.log(numbers.indexOf(commandNumbers.shift()));
                break;

            case 'remove':
                numbers.splice(commandNumbers.shift(), 1);
                break;

            case 'shift':
                let positions = commandNumbers.shift();
                
                for (let i = 0; i < positions; i++) {
                    numbers.push(numbers.shift());
                }
                break;

            case 'sumPairs':
                let arraySums = [];

                for (let i = 0; i < numbers.length; i += 2) {
                    if (numbers[i + 1] != undefined) {
                        let currentSum = numbers[i] + numbers[i + 1];
                        arraySums.push(currentSum);
                    } else {
                        arraySums.push(numbers[i]);
                    }
                }

                numbers = arraySums;
                break;

            case 'print':
                console.log(`[ ${numbers.join(', ')} ]`);
                commands.length = 0;
                break;
        }
    }
}

arrayManipulator([1, 2, 4, 5, 6, 7],
    ['add 1 8', 'contains 1', 'contains 3', 'print']);