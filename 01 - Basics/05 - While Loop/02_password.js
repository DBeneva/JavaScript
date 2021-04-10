function password(input) {
    let userName = input[0];
    let password = input[1];
    let index = 2;

    while (input[index] != password) {
        index++;
    }

    console.log(`Welcome ${userName}!`);
}

password(['Nakov', '1234', 'pass', '1324', '1234']);