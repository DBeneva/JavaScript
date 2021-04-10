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

    const salesCategories = {
        first: 500,
        second: 1000,
        third: 10000,
        fourth: Number.MAX_SAFE_INTEGER
    };

    const cities = {
        'Sofia': {
            first: 0.05,
            second: 0.07,
            third: 0.08,
            fourth: 0.12
        },
        'Varna': {
            first: 0.045,
            second: 0.075,
            third: 0.1,
            fourth: 0.13
        },
        'Plovdiv': {
            first: 0.055,
            second: 0.08,
            third: 0.12,
            fourth: 0.145
        }
    };

    const salesCategory = Object.entries(salesCategories).find(([k, v]) => sales <= v)[0];
    
    return (cities[city][salesCategory] * sales).toFixed(2) || 'error';
}

console.log(getCommission(['Sofia', 1500]));

console.log('=====================');

console.log(getCommissionObj(['Sofia', 1500]));