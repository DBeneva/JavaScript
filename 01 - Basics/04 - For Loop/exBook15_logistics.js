function logistics(...input) {
    const loads = Number(input[0]);
    
    let tonsBus = 0;
    let tonsTruck = 0;
    let tonsTrain = 0;

    for (let i = 1; i <= loads; i++) {
        const tons = Number(input[i]);
        
        if (tons <= 3) {
            tonsBus += tons;
        } else if (tons <= 11) {
            tonsTruck += tons;
        } else {
            tonsTrain += tons;
        }
    }

    const tonsTotal = tonsBus + tonsTruck + tonsTrain;
    const averagePrice = (tonsBus * 200 + tonsTruck * 175 + tonsTrain * 120) / tonsTotal;
    const percentageBus = tonsBus * 100 / tonsTotal;
    const percentageTruck = tonsTruck * 100 / tonsTotal;
    const percentageTrain = tonsTrain * 100 / tonsTotal;

    return `${averagePrice.toFixed(2)}
${percentageBus.toFixed(2)}%
${percentageTruck.toFixed(2)}%
${percentageTrain.toFixed(2)}%`;
}

console.log(logistics(4, 1, 5, 16, 3));