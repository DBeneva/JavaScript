function passwordReset(input) {
    let password = input.shift();

    let actions = {
        TakeOdd() {
            let newPassword = '';
            for (let i = 1; i < password.length; i += 2) {
                newPassword += password[i];
            }
            password = newPassword;
            console.log(password);
            return password;
        },
        Cut([index, length]) {
            [index, length] = [index, length].map(Number);
            password = password.replace(password.substring(index, index + length), '');
            console.log(password);
            return password;
        },
        Substitute([substring, substitute]) {
            if (password.includes(substring)) {
                password = password.replace(new RegExp(substring, 'g'), substitute);
                console.log(password);
            } else {
                console.log('Nothing to replace!');
            }
            return password;
        },
        Done() {
            console.log(`Your password is: ${password}`);
        }
    };

    input.forEach(instruction => {
        let [command, ...params] = instruction.split(' ');
        actions[command](params);
    });
}

passwordReset([
    'up8rgoyg3r1atmlmpiunagt!-irs7!1fgulnnnqy',
    'TakeOdd',
    'Cut 18 2',
    'Substitute ! ***',
    'Substitute ? .!.',
    'Done'
  ]
  );