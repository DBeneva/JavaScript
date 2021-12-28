function printCommission([city, sales]) {
    sales = Number(sales);
    const commission = getCommissionPerCity();
    const output = commission
        ? (commission * sales).toFixed(2)
        : 'error';

    console.log(output);
    
    function getCommissionPerCity() {
        switch (city) {
            case 'Sofia': return getCommissionPerSales(0.05, 0.07, 0.08, 0.12);
            case 'Varna': return getCommissionPerSales(0.045, 0.075, 0.1, 0.13);
            case 'Plovdiv': return getCommissionPerSales(0.055, 0.08, 0.12, 0.145);
        }
    }

    function getCommissionPerSales(tiny, small, big, huge) {
        if (sales < 0) return 0;
        else if (sales >= 0 && sales <= 500) return tiny;
        else if (sales > 500 && sales <= 1000) return small;
        else if (sales > 1000 && sales <= 10000) return big;
        else if (sales > 10000) return huge;
    }
}

printCommission(['Sofia', 0.6]);