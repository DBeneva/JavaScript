function printCommission([city, sales]) {
    sales = Number(sales);
    
    const cities = {
        Sofia: createCity(0.05, 0.07, 0.08, 0.12),
        Varna: createCity(0.045, 0.075, 0.1, 0.13),
        Plovdiv: createCity(0.055, 0.08, 0.12, 0.145)
    }

    const output = cities[city] && cities[city].commission
        ? (cities[city].commission * sales).toFixed(2)
        : 'error';
    
    console.log(output);
    
    function createCity(tiny, small, big, huge) {
        return { commission: getCommission() }; 
            
        function getCommission() {
            if (sales <= 0) return 0;
            else if (sales >= 0 && sales <= 500) return tiny;
            else if (sales <= 1000) return small;
            else if (sales <= 10000) return big;
            else return huge;
        }
    }
}

printCommission(['Plovdiv', '-20', '']);