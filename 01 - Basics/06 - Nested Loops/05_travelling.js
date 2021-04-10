function travelling(input) {
    let destination = input[0];
    let moneyNeeded = Number(input[1]);
    let money = 0;
    let i = 2;

    while (destination != 'End' && input[i] != undefined) {
        while (money < moneyNeeded) {
            money += Number(input[i]);
            i++;
        }
        
        console.log(`Going to ${destination}!`);
        destination = input[i];
        money = 0;
        moneyNeeded = Number(input[i + 1]);
        i += 2;
    }
}

travelling(['France', '2000', '300', '300',
    '200', '400', '190', '258', '360',
    'Portugal', '1450', '400', '400', '200','300', '300',
    'Egypt', '1900', '1000', '280', '300', '500',
    'End']);