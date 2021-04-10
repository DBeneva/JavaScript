function login(input) {
    let username = input[0];
    let correctPassword = username.split("").reverse().join("");
    let currentPassword = '';

    for (let i = 1; i <= 4; i++) {
        currentPassword = input[i];
        
        if (currentPassword == correctPassword) {
            console.log(`User ${username} logged in.`);
            break;
        } else {
            if (i == 4) {
                console.log(`User ${username} blocked!`);
                break;
            }

            console.log('Incorrect password. Try again.');
        }
    }
}

login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);