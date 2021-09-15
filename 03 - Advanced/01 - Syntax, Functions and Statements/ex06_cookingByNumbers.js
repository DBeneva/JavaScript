function cookingByNumbers(...input) {
    let num = Number(input.shift());

    let actions = {
        chop() {
            num /= 2;
            return console.log(num);
        },
        dice() {
            num = Math.sqrt(num);
            return console.log(num);
        },
        spice() {
            num++;
            return console.log(num);
        },
        bake() {
            num *= 3;
            return console.log(num);
        },
        fillet() {
            num -= num * 0.2;
            return console.log(num);
        }
    };

    input.forEach(operation => {
        if (actions.hasOwnProperty(operation)) {
            actions[operation]();
        }
    });
}

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');