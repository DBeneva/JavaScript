function softUniBarIncome(input) {
    let name = '%(?<name>[A-Z][a-z]+)% ';
    let product = '<(?<product>\\w+)> ';
    let count = '\\|(?<count>\\d+)\\| ';
    let price = '(?<price>\\d+\\.?\\d*)\\$';
    let validOrder = (name + product + count + price).split(' ').join('[^\\|\\$%\\.\\d]*'); 
    let totalIncome = 0;

    input.forEach(order => {
        if (match = order.match(validOrder)) {
            let price = Number(match.groups.count) * Number(match.groups.price);
            console.log(`${match.groups.name}: ${match.groups.product} - ${price.toFixed(2)}`);
            totalIncome += price;
        }
    });

    console.log(`Total income: ${totalIncome.toFixed(2)}`);
}

softUniBarIncome([
    '%InvalidName%<Croissant>|2|10.3$',
    '%Peter%<Gum>1.3$',
    '%Maria%<Cola>|1|2.4',
    '%Valid%<Valid>valid|10|valid20$',
    'end of shift'
  ]
  
  );