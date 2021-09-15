function easterCozonacs(input) {
    let [budget, flourPrice] = input.map(Number);
    let eggsPrice = flourPrice * 0.75;
    let milkPrice = flourPrice * 1.25 / 4;
    let totalPrice = flourPrice + eggsPrice + milkPrice;
    let cozonacs = Math.floor(budget / totalPrice);
    let coloredEggs = 0;

    for (let i = 1; i <= cozonacs; i++) {
        coloredEggs += 3;
        
        if (i % 3 == 0) {
            coloredEggs -= i - 2;
        }
    }

    console.log(`You made ${cozonacs} cozonacs! Now you have ${coloredEggs} eggs and ${(budget % totalPrice).toFixed(2)}BGN left.`);
}

easterCozonacs(['15.75', '1.4']);