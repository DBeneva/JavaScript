function passwordGenerator(input) {
    let vowels = ['a', 'e', 'i', 'o', 'u'];
    let string = input.shift() + input.shift();
    let word = input.shift();
    let index = 0;
    let password = '';

    for (let i = 0; i < string.length; i++) {
        if (vowels.includes(string[i])) {
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