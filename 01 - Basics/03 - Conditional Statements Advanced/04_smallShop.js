function getPrice([product, city, qty]) {
    let price = 0;

    switch (city) {
        case 'Sofia':
            switch (product) {
                case 'coffee': price = 50; break;
                case 'water': price = 80; break;
                case 'beer': price = 120; break;
                case 'sweets': price = 145; break;
                case 'peanuts': price = 160; break;
            }
            break;

        case 'Plovdiv':
            switch (product) {
                case 'coffee': price = 40; break;
                case 'water': price = 70; break;
                case 'beer': price = 115; break;
                case 'sweets': price = 130; break;
                case 'peanuts': price = 150; break;
            }
            break;

        case 'Varna':
            switch (product) {
                case 'coffee': price = 45; break;
                case 'water': price = 70; break;
                case 'beer': price = 110; break;
                case 'sweets': price = 135; break;
                case 'peanuts': price = 155; break;
            }
            break;
    }

    return price * Number(qty) / 100;
}

function getPriceObj([product, city, qty]) {
    const products = {
        coffee: {
            Sofia: 50,
            Plovdiv: 40,
            Varna: 45
        },
        water: {
            Sofia: 80,
            Plovdiv: 70,
            Varna: 70
        },
        beer: {
            Sofia: 120,
            Plovdiv: 115,
            Varna: 110
        },
        sweets: {
            Sofia: 145,
            Plovdiv: 130,
            Varna: 135
        },
        peanuts: {
            Sofia: 160,
            Plovdiv: 150,
            Varna: 155
        }
    };

    return products[product][city] * Number(qty) / 100;
}

console.log(getPrice(['beer', 'Sofia', 6]));

console.log('====================');

console.log(getPriceObj(['beer', 'Sofia', 6]));