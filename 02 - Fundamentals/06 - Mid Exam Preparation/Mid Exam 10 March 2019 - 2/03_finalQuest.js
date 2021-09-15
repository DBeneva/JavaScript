function finalQuest(input) {
    let outputLine = input.shift().split(' ');
    input = input.slice(0, input.indexOf('Stop'));

    let actions = {
        Delete(array, index) {
            index = Number(index);
            if (array[index] != undefined) {
                array.splice(index + 1, 1);
            }
        },
        Swap(array, word1, word2) {
            if (array.includes(word1) && array.includes(word2)) {
                array[array.indexOf(word1)] = array.splice(array.indexOf(word2), 1, word1).join('');
            }
        },
        Put(array, word, index) {
            index = Number(index);
            if (index >= 1 && index <= outputLine.length + 1) {
                array.splice(index - 1, 0, word);   
            }
        },
        Sort(array) {
            array = array.sort().reverse(); 
        },
        Replace(array, word1, word2) {
            if (array.includes(word2)) {
                array.splice(array.indexOf(word2), 1, word1);
            }
        }
    };

    while (input.length > 0) {
        let [command, x, y] = input.shift().split(' ');
        
        if (actions.hasOwnProperty(command)) {
            actions[command](outputLine, x, y);
        }
    }

    console.log(outputLine.join(' '));
}

finalQuest([
    'Congratulations! You last also through the have challenge!',
    'Swap have last',
    'Replace made have',
    'Delete 2',
    'Put it 4',
    'Stop',
    ''
]);