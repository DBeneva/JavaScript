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

function logisticsArr(...input) {
    const loads = input.slice(1).map(Number);
    const tonsTotal = loads.reduce((acc, curr) => acc + curr, 0);
    const tonsBus =  getTons('bus');
    const tonsTruck =  getTons('truck');
    const tonsTrain =  getTons('train');
    const averagePrice = (tonsBus * 200 + tonsTruck * 175 + tonsTrain * 120) / tonsTotal;

    return `${averagePrice.toFixed(2)}
${(tonsBus / tonsTotal * 100).toFixed(2)}%
${(tonsTruck / tonsTotal * 100).toFixed(2)}%
${(tonsTrain / tonsTotal * 100).toFixed(2)}%`;

    function getTons(vehicle) {
        const transportation = {
            bus: (x) => x <= 3,
            truck: (x) => x > 3 && x <= 11,
            train: (x) => x > 11 
        };

        return loads
            .filter(transportation[vehicle])
            .reduce((acc, curr) => acc + curr, 0);
    }
}

console.log(logistics(4, 1, 5, 16, 3));

console.log('===================');

console.log(logisticsArr(4, 1, 5, 16, 3));