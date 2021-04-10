function yardGreening(area) {
    let price = area * 7.61;
    let discount = 0.18 * price;
    let finalPrice = price - discount;
    
    console.log(`The final price is: ${finalPrice.toFixed(2)} lv.`);
    console.log(`The discount is: ${discount.toFixed(2)} lv.`);
}

yardGreening(540);