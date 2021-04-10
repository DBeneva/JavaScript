function furniture(purchases) {
    let validLine = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d*)!(?<quantity>\d+)/;
    let total = 0;
    
    console.log('Bought furniture:');
    purchases.forEach(x => {
        if (validLine.test(x)) {
            let match = x.match(validLine);
            console.log(match.groups.name);
            total += Number(match.groups.price) * Number(match.groups.quantity);
        }
    });
    console.log(`Total money spend: ${total.toFixed(2)}`);
}

furniture(['>>Sofa<<312.23!3', '>>TV<<300!5', '>Invalid<<!5', 'Purchase']);