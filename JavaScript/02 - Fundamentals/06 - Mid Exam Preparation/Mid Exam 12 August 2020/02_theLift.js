function theLift(input) {
    let waiting = Number(input.shift());
    let wagons = input.join('').split(' ').map(Number);
    let wagonsFull = [];
    
    wagons.map(x => {
        let spots = 4 - x;
        x += Math.min(spots, waiting);
        waiting = Math.max(waiting - spots, 0);
        wagonsFull.push(x)
    });

    if (waiting == 0 && !isFull(wagonsFull)) {
        console.log(`The lift has empty spots!\n${wagonsFull.join(' ')}`);
    } else if (waiting > 0 && isFull(wagonsFull)) {
        console.log(`There isn't enough space! ${waiting} people in a queue!\n${wagonsFull.join(' ')}`);
    } else {
        console.log(wagonsFull.join(' '));
    }

    function isFull(array) {
        return array.filter(x => x < 4).length == 0;
    }
}

theLift([
    '15',
    '0 0 0 0 0'
]);