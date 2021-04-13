function getPetFood(dogs, other) {
    const totalPrice = dogs * 2.5 + other * 4;

    return `${totalPrice.toFixed(2)} lv.`;
}

function getPetFoodObj(dogs, other) {
    const pets = {
        dogs: 2.5,
        other: 4,
        get totalPrice() {
            return dogs * this.dogs + other * this.other;
        }
    };

    return `${pets.totalPrice.toFixed(2)} lv.`;
}

console.log(getPetFood(5, 4));

console.log('====================');

console.log(getPetFoodObj(5, 4));