function printPrice([fruit, day, qty]) {
    qty = Number(qty);
    const price = getPricePerProduct();
    
    console.log(price ? (price * qty).toFixed(2) : 'error');
    
    function getPricePerProduct() {
        switch (fruit) {
            case 'banana': return getPricePerDay(2.5, 2.7);
            case 'apple': return getPricePerDay(1.2, 1.25);
            case 'orange': return getPricePerDay(0.85, 0.9);
            case 'grapefruit': return getPricePerDay(1.45, 1.6);
            case 'kiwi': return getPricePerDay(2.7, 3);
            case 'pineapple': return getPricePerDay(5.5, 5.6);
            case 'grapes': return getPricePerDay(3.85, 4.2);
            default: return 0;
        }
    }
    
    function getPricePerDay(weekdayPrice, weekendPrice) {
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const weekend = ['Saturday', 'Sunday'];

        if (weekdays.includes(day)) return weekdayPrice;
        else if (weekend.includes(day)) return weekendPrice;
        else return 0;
    }
}

function printPriceObject([fruit, day, qty]) {
    const fruits = {
        banana: createFruit(2.5, 2.7),
        apple: createFruit(1.2, 1.25),
        orange: createFruit(0.85, 0.9),
        grapefruit: createFruit(1.45, 1.6),
        kiwi: createFruit(2.7, 3),
        pineapple: createFruit(5.5, 5.6),
        grapes: createFruit(3.85, 4.2)
    };

    const output = fruits[fruit] && fruits[fruit].price
        ? (fruits[fruit].price * qty).toFixed(2)
        : 'error';

    console.log(output);

    function createFruit(weekdayPrice, weekendPrice) {
        const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
        const weekend = ['Saturday', 'Sunday'];

        return { price: getPrice() };

        function getPrice() {
            if (weekdays.includes(day)) return weekdayPrice;
            else if (weekend.includes(day)) return weekendPrice;
            else return 0;
        }
    }
}

printPrice(['tomato', 'Monday', 0.5]);
console.log('====================');
printPriceObject(['grapes', 'Tuesday', 1.200]);