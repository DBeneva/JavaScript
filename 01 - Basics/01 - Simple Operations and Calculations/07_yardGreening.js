function getYardGreening(area) {
    const price = area * 7.61;
    const discount = 0.18 * price;
    const finalPrice = price - discount;

    return `The final price is: ${finalPrice.toFixed(2)} lv.
The discount is: ${discount.toFixed(2)} lv.`;
}

console.log(getYardGreening(540));