function arrayRotation(array, rotations) {

    for (let rotation = 1; rotation <= rotations; rotation++) {
            let element = array.shift();
            array.push(element);
    }

    console.log(array.join(' '));
}

arrayRotation([51, 47, 32, 61, 21], 2);