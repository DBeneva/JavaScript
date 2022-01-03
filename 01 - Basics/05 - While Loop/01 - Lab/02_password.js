function password(input) {
    let correctPass = false;

    for (let i = 2; i < input.length; i++) {
        if (input[i] == input[1]) correctPass = true;
    }

    console.log(
        correctPass
            ? `Welcome ${input[0]}!`
            : 'Wrong password!'
    );
}

function passwordArr(input) {
    const [userName, password] = input.slice(0, 2);

    console.log(
        input.includes(password)
            ? `Welcome ${userName}!`
            : 'Wrong password!'
    );
}

password(['Nakov', '1234', 'pass', '1324', '1234']);
console.log('====================');
passwordArr(['Nakov', '1234', 'pass', '1324', '1234']);