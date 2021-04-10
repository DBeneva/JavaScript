function petStore(dogs, other) {
    let totalPrice = dogs * 2.5 + other * 4;
    console.log(`${totalPrice.toFixed(2)} lv.`);
}

petStore(5, 4);