function printPetFoodPrice([dogs, other]) {
    const totalPrice = dogs * 2.5 + other * 4;

    console.log(`${totalPrice.toFixed(2)} lv.`);
}

printPetFoodPrice([5, 4]);
printPetFoodPrice(['5', '4']);