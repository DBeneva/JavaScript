function heartDelivery(input) {
    let neighborhood = input.shift().split('@').map(Number);
    let index = 0;

    for (command of input) {
        let [action, length] = command.split(' ');

        if (action == 'Love!') {
            break;
        }

        length = Number(length);
        index = index + length < neighborhood.length ? index + length : 0;

        if (neighborhood[index] > 0) {
            neighborhood[index] -= 2;
            
            if (neighborhood[index] == 0) {
                console.log(`Place ${index} has Valentine's day.`);
            }
        } else {
            console.log(`Place ${index} already had Valentine's day.`);
        }
    }

    console.log(`Cupid's last position was ${index}.`);
    
    if (neighborhood.filter(x => x > 0).length == 0) {
        console.log('Mission was successful.');
    } else {
        console.log(`Cupid has failed ${neighborhood.filter(x => x > 0).length} places.`);
    }
}

heartDelivery(['10@10@10@2', 'Jump 1', 'Jump 2', 'Love!']);