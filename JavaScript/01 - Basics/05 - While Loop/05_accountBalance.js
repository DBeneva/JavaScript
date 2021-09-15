function accountBalance(input) {
    const numberOfTransactions = Number(input[0]);
    let total = 0;
    let i = 1;
    let output = '';

    while (i <= numberOfTransactions) {
        if (Number(input[i]) < 0) {
            output += `Invalid operation!\n`;
            break;
        } else {
            total += Number(input[i]);
            output += `Increase: ${Number(input[i]).toFixed(2)}\n`;
        }

        i++;
    }

    return output + `Total: ${total.toFixed(2)}`;
}

function accountBalanceArr(input) {
    const transactions = input.slice(1).map(Number);
    const total = transactions.reduce((acc, curr) => acc + (curr < 0 ? 0 : curr));
    
    return transactions
        .map(x => x < 0 ? 'Invalid operation!' : `Increase: ${x.toFixed(2)}`)
        .concat(`Total: ${total.toFixed(2)}`)
        .join('\n');
}

console.log(accountBalance([5, 120, 45.55, -150]));

console.log('====================');

console.log(accountBalanceArr([5, 120, 45.55, -150]));