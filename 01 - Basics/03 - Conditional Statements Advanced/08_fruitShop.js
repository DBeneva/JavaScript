function getPrice([fruit, dayOfTheWeek, qty]) {
    qty = Number(qty);
    let price = 0;

    switch (dayOfTheWeek) {
        case 'Monday':
        case 'Tuesday':
        case 'Wednesday':
        case 'Thursday':
        case 'Friday':
            switch (fruit) {
                case 'banana': price = 2.5; break;
                case 'apple': price = 1.2; break;
                case 'orange': price = 0.85; break;
                case 'grapefruit': price = 1.45; break;
                case 'kiwi': price = 2.7; break;
                case 'pineapple': price = 5.5; break;
                case 'grapes': price = 3.85; break;
            }
            break;

        case 'Saturday':
        case 'Sunday':
            switch (fruit) {
                case 'banana': price = 2.7; break;
                case 'apple': price = 1.25; break;
                case 'orange': price = 0.9; break;
                case 'grapefruit': price = 1.6; break;
                case 'kiwi': price = 3; break;
                case 'pineapple': price = 5.6; break;
                case 'grapes': price = 4.2; break;
            }
            break;
    }

    return price.toFixed(2) * qty || 'error';
}

function getPriceObj([fruit, day, qty]) {
    const fruits = {
        banana: createFruit('banana', 2.5, 2.7),
        apple: createFruit('apple', 1.2, 1.25),
        orange: createFruit('orange', 0.85, 0.9),
        grapefruit: createFruit('grapefruit', 1.45, 1.6),
        kiwi: createFruit('kiwi', 2.7, 3),
        pineapple: createFruit('pineapple', 5.5, 5.6),
        grapes: createFruit('grapes', 3.85, 4.2)
    };
    
    const result = fruits[fruit] && fruits[fruit].price ?
    (fruits[fruit].price * qty).toFixed(2) : 'error';
    
    return result;
    
    function createFruit(name, weekdayPrice, weekendPrice) {
        return {
            name,
            price: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'].includes(day) ?
                weekdayPrice :
                ['Saturday', 'Sunday'].includes(day) ? weekendPrice :
                    0
        }
    }
}

console.log(getPrice(['grapes', 'Tuesday', 1.200]));

console.log('====================');

console.log(getPriceObj(['grapes', 'Tuesday', 1.200]));