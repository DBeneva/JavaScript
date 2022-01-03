function logistics(input) {
    const loads = input.slice(1).map(Number);
    const tonsTotal = loads.reduce((acc, curr) => acc + curr, 0);
    const tonsBus = getTons('bus');
    const tonsTruck = getTons('truck');
    const tonsTrain = getTons('train');
    const averagePrice = (tonsBus * 200 + tonsTruck * 175 + tonsTrain * 120) / tonsTotal;

    console.log(
        `${averagePrice.toFixed(2)}\n` +
        `${(tonsBus * 100 / tonsTotal).toFixed(2)}%\n` +
        `${(tonsTruck * 100 / tonsTotal).toFixed(2)}%\n` +
        `${(tonsTrain * 100 / tonsTotal).toFixed(2)}%`
    );

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

logistics([4, 1, 5, 16, 3]);