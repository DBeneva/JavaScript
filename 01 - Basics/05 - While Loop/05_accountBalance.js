function accountBalance(input) {
    let numberOfTransactions = Number(input[0]);
    let total = 0;
    let i = 1;

    while (i <= numberOfTransactions) {
        if (Number(input[i]) < 0) {
            console.log('Invalid operation!');
            break;
        } else {
            total += Number(input[i]);
            console.log(`Increase: ${Number(input[i]).toFixed(2)}`);
        }

        i++;
    }

    console.log(`Total: ${total.toFixed(2)}`);
}

accountBalance([5, 120, 45.55, -150]);