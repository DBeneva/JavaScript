function printPrice([fruit, day, qty]) {
    qty = Number(qty);
    const price = getPricePerFruit();
    
    console.log(price ? (price * qty).toFixed(2) : 'error');
    
    function getPricePerFruit() {
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

printPrice(['tomato', 'Monday', 0.5]);