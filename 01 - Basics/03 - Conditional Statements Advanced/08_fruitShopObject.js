function printPrice([fruit, day, qty]) {
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

printPrice(['grapes', 'Tuesday', 1.200]);