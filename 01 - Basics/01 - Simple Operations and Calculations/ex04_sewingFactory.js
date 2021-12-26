function printTableclothPrice(tables, tableLength, tableWidth) {
    inputParamsToNumbers();

    const totalPriceUsd = tables * (getRectanglePrice() + getSquarePrice());
    const totalPriceBgn = totalPriceUsd * 1.85;

    console.log(
        `${totalPriceUsd.toFixed(2)} USD\n` +
        `${totalPriceBgn.toFixed(2)} BGN`
    );

    function inputParamsToNumbers() {
        tables = Number(tables);
        tableLength = Number(tableLength);
        tableWidth = Number(tableWidth);
    }

    function getRectanglePrice() {
        return (tableLength + 0.6) * (tableWidth + 0.6) * 7;
    }

    function getSquarePrice() {
        return (tableLength / 2 ** 2) * 9;
    }
}

printTableclothPrice(5, 1.00, 0.50);