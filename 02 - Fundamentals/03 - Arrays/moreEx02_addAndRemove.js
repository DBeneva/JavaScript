function addAndRemove(input) {
    let array = [];

    for (let i = 1; i <= input.length; i++) {
        switch (input[i - 1]) {
            case 'add': array.push(i); break;
            case 'remove': 
                if (array.length >= 1) {
                    array.length -= 1;
                } else {
                    array.length = 0;
                }
                break;
        }
    }

    if (array.length == 0) {
        console.log('Empty');
    } else {
        console.log(array.join(' '));
    }
}

addAndRemove(['remove', 'remove', 'remove']);