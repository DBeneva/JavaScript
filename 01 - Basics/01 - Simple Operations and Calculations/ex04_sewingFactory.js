function getTableclothPrice(tables, tableLength, tableWidth) {
    tables = Number(tables);
    tableLength = Number(tableLength);
    tableWidth = Number(tableWidth);

    const rectanglePriceUsd = tables * (tableLength + 0.6) * (tableWidth + 0.6) * 7;
    const squarePriceUsd = tables * (tableLength / 2 ** 2) * 9;
    const totalPriceUsd = rectanglePriceUsd + squarePriceUsd;
    const totalPriceBgn = totalPriceUsd * 1.85;

    return `${totalPriceUsd.toFixed(2)} USD\n${totalPriceBgn.toFixed(2)} BGN`;    
}

function getTableclothPriceObj(...input) {
    const [tables, tableLength, tableWidth] = input.map(Number);
    const prices = {
        rectangle: 7,
        square: 9,
        usd: 1.85
    };

    const totalPriceUsd = getRectanglePrice() + getSquarePrice();
    const totalPriceBgn = totalPriceUsd * prices.usd;

    return `${totalPriceUsd.toFixed(2)} USD\n${totalPriceBgn.toFixed(2)} BGN`;    

    function getRectanglePrice() {
        return tables * (tableLength + 0.6) * (tableWidth + 0.6) * prices.rectangle;
    }

    function getSquarePrice() {
        return tables * (tableLength / 2 ** 2) * prices.square;
    }
}

console.log(getTableclothPrice(5, 1.00, 0.50));

console.log('====================');

console.log(getTableclothPriceObj(5, 1.00, 0.50));