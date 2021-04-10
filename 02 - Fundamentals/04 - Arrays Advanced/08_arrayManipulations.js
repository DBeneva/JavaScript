function arrayManipulations(input) {
    let array = input.shift()
        .split(' ')
        .map(Number);

    for (let i = 0; i < input.length; i++) {
        let [command, firstNum, secondNum] = input[i].split(" ");
        firstNum = Number(firstNum);
        secondNum = Number(secondNum);

        switch (command) {
            case 'Add': array.push(firstNum); break;
            case 'Remove': array = array.filter(el => el != firstNum); break;
            case 'RemoveAt': array.splice(firstNum, 1); break;
            case 'Insert': array.splice(secondNum, 0, firstNum); break;
        }
    }

    console.log(array.join(' '));
}

arrayManipulations(['4 19 2 53 6 43',
    'Add 3',
    'Remove 2',
    'RemoveAt 1',
    'Insert 8 3']);