function evenPositionElement(array) {
    console.log(array.filter((x, i, a) => i % 2 == 0).join(' '));
}

evenPositionElement(['20', '30', '40', '50', '60']);
evenPositionElement(['5', '10']);