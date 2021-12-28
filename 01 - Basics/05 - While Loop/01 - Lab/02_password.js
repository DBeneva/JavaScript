function password(input) {
    const userName = input[0];
    const password = input[1];
    let index = 2;
    let output = '';

    while (input[index] != password) {
        output += `Wrong password!\n`;
        index++;
    }

    return output + `Welcome ${userName}!`;
}

function passwordArr(input) {
    const [userName, password] = input.splice(0, 2);

    return input
        .map(x => x == password ? `Welcome ${userName}!` : `Wrong password!`)
        .join('\n');
}

console.log(password(['Nakov', '1234', 'pass', '1324', '1234']));

console.log('====================');

console.log(passwordArr(['Nakov', '1234', 'pass', '1324', '1234']));