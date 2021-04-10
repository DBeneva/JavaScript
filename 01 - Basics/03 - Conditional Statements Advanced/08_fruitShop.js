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

function getPriceObj([fruit, dayOfTheWeek, qty]) {
    qty = Number(qty);

    const days = {
        weekday: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
        weekend: ['Saturday', 'Sunday']
    };

    const fruits = {
        banana: {
            weekday: 2.5,
            weekend: 2.7
        },
        apple: {
            weekday: 1.2,
            weekend: 1.25
        },
        orange: {
            weekday: 0.85,
            weekend: 0.9
        },
        grapefruit: {
            weekday: 1.45,
            weekend: 1.6
        },
        kiwi: {
            weekday: 2.7,
            weekend: 3
        },
        pineapple: {
            weekday: 5.5,
            weekend: 5.6
        },
        grapes: {
            weekday: 3.85,
            weekend: 4.2
        }
    };

    const day = Object.keys(days).find(d => days[d].includes(dayOfTheWeek));
    const result = fruits[fruit] && fruits[fruit][day] ?
        (fruits[fruit][day] * qty).toFixed(2) : 'error';

    return result;
}

console.log(getPrice(['grapes', 'Tuesday', 1.200]));

console.log('====================');

console.log(getPriceObj(['grapes', 'Tuesday', 1.200]));