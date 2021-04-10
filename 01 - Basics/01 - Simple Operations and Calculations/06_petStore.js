function getPetFood(dogs, other) {
    const totalPrice = dogs * 2.5 + other * 4;

    return `${totalPrice.toFixed(2)} lv.`;
}

console.log(getPetFood(5, 4));