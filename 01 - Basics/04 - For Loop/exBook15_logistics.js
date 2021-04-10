function logistics(...input) {
    let loads = Number(input[0]);
    let tonsBus = 0;
    let tonsTruck = 0;
    let tonsTrain = 0;

    for (let i = 1; i <= loads; i++) {
        let tons = Number(input[i]);
        
        if (tons <= 3) {
            tonsBus += tons;
        } else if (tons <= 11) {
            tonsTruck += tons;
        } else {
            tonsTrain += tons;
        }
    }

    let tonsTotal = tonsBus + tonsTruck + tonsTrain;
    let averagePrice = (tonsBus * 200 + tonsTruck * 175 + tonsTrain * 120) / tonsTotal;
    let percentageBus = tonsBus * 100 / tonsTotal;
    let percentageTruck = tonsTruck * 100 / tonsTotal;
    let percentageTrain = tonsTrain * 100 / tonsTotal;

    console.log(`${averagePrice.toFixed(2)}`);
    console.log(`${percentageBus.toFixed(2)}%`);
    console.log(`${percentageTruck.toFixed(2)}%`);
    console.log(`${percentageTrain.toFixed(2)}%`);
}

logistics(4, 1, 5, 16, 3);