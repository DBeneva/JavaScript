function logistics(input) {
    const loads = Number(input[0]);
    let tonsBus = 0, tonsTruck = 0, tonsTrain = 0;

    for (let i = 1; i <= loads; i++) {
        const tons = Number(input[i]);

        if (tons <= 3) tonsBus += tons;
        else if (tons <= 11) tonsTruck += tons;
        else tonsTrain += tons;
    }

    const tonsTotal = tonsBus + tonsTruck + tonsTrain;
    const averagePrice = (tonsBus * 200 + tonsTruck * 175 + tonsTrain * 120) / tonsTotal;

    console.log(
        `${averagePrice.toFixed(2)}\n` +
        `${(tonsBus * 100 / tonsTotal).toFixed(2)}%\n` +
        `${(tonsTruck * 100 / tonsTotal).toFixed(2)}%\n` +
        `${(tonsTrain * 100 / tonsTotal).toFixed(2)}%`
    );
}

logistics([4, 1, 5, 16, 3]);