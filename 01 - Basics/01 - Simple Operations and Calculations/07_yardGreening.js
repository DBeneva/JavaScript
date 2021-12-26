function printGreeningPrice([area]) {
    const price = area * 7.61;
    const discount = price * 0.18;
    const finalPrice = price - discount;

    console.log(
        `The final price is: ${finalPrice} lv.\n` +
        `The discount is: ${discount} lv.`
    );
}

printGreeningPrice([540]);
printGreeningPrice(['540']);