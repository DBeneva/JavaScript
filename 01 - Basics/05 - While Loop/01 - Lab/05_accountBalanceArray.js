function accountBalance(input) {
    const transactions = input
        .slice(1)
        .map(Number)
        .filter(x => !isNaN(x));
    
    const total = transactions
        .reduce((acc, curr) => acc + (curr < 0 ? 0 : curr));

    console.log(
        transactions
            .map(x => x < 0 ? 'Invalid operation!' : `Increase: ${x.toFixed(2)}`)
            .concat(`Total: ${total.toFixed(2)}`)
            .join('\n')
    );
}

accountBalance([5, 120, 'a', 45.55, -150]);