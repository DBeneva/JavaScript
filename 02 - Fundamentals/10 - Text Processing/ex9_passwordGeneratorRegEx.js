function passwordGenerator([first, second, word]) {
    let string = first.concat(second);
    let index = 0;
    let password = '';

    for (let i = 0; i < string.length; i++) {
        if (string[i].match(/[aeiou]/)) {
            password += word[index].toUpperCase();
            index = index + 1 == word.length ? 0 : index + 1;  
        } else {
            password += string[i];
        }
    }

    console.log(`Your generated password is ${password.split('').reverse().join('')}`);
}

passwordGenerator([
    'ilovepizza', 'ihatevegetables',
    'orange'
    ]
    );