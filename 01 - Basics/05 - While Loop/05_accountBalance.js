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
    const transactions = input
        .slice(1)
        .map(x => x < 0 ? 'Invalid operation!' : `Increase: ${x}`);

    const total = transactions.reduce((acc, curr) => acc + Number(curr.slice(curr.indexOf(':') + 2)) || 0, 0);
        return total;

}

console.log(accountBalance([5, 120, 45.55, -150]));

console.log('====================');

console.log(accountBalanceArr([5, 120, 45.55, -150]));