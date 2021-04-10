function memoryGame(input) {
    let sequence = input.shift().split(' ');

    for (let i = 0; i < input.length; i++) {
        let [index1, index2] = input[i].split(' ').map(Number);

        if (isNaN(index1)) {
            console.log('Sorry you lose :(');
            console.log(sequence.join(' '));
            break;
        } else if (index1 == index2 ||
            notInArray(sequence, index1) ||
            notInArray(sequence, index2)) {
                console.log('Invalid input! Adding additional elements to the board');
                sequence.splice(sequence.length / 2, 0, `-${i + 1}a`, `-${i + 1}a`);
        } else if (sequence[index1] == sequence[index2]) {
            console.log(`Congrats! You have found matching elements - ${sequence[index1]}!`);
            sequence.splice(Math.max(index1, index2), 1);
            sequence.splice(Math.min(index1, index2), 1);
        } else {
            console.log('Try again!');
        }

        if (sequence.length == 0) {
            console.log(`You have won in ${i + 1} turns!`);
            break;
        }
    }

    function notInArray(array, index) {
        return index < 0 || index >= array.length;
    }
}

memoryGame([
    'a 2 4 a 2 4', 
    '4 0', 
    '0 2',
    '0 1',
    '0 1', 
    'end'
]);