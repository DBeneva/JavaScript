function getCommission([city, sales]) {
    sales = Number(sales);
    let commission = 0;

    switch (city) {
        case 'Sofia':
            if (sales >= 0 && sales <= 500) {
                commission = 0.05;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.07;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.08;
            } else if (sales > 10000) {
                commission = 0.12;
            }
            break;

        case 'Varna':
            if (sales >= 0 && sales <= 500) {
                commission = 0.045;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.075;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.1;
            } else if (sales > 10000) {
                commission = 0.13;
            }
            break;

        case 'Plovdiv':
            if (sales >= 0 && sales <= 500) {
                commission = 0.055;
            } else if (sales > 500 && sales <= 1000) {
                commission = 0.08;
            } else if (sales > 1000 && sales <= 10000) {
                commission = 0.12;
            } else if (sales > 10000) {
                commission = 0.145;
            }
            break;
    }

    return (commission * sales).toFixed(2) || 'error';
}

function getCommissionObj([city, sales]) {
    sales = Number(sales);
    
    const cities = {
        Sofia: createCity('Sofia', 0.05, 0.07, 0.08, 0.12),
        Varna: createCity('Varna', 0.045, 0.075, 0.1, 0.13),
        Plovdiv: createCity('Plovdiv', 0.055, 0.08, 0.12, 0.145)
    }
    
    return (cities[city].commission * sales).toFixed(2) || 'error';
    
    function createCity(name, first, second, third, fourth) {
        return {
            name,
            commission: sales <= 500 ? first :
                sales <= 1000 ? second :
                    sales <= 10000 ? third :
                        fourth
        }
    }
}

console.log(getCommission(['Sofia', 1500]));

console.log('=====================');

console.log(getCommissionObj(['Sofia', 1500]));