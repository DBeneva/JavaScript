const bcrypt = require('bcrypt');

const saltRounds = 8;
const myPlainTextPassword = 'password1';
const otherPassword = 'password2';

async function gen() {
    const hash = await bcrypt.hash(myPlainTextPassword, saltRounds);
    console.log(hash);
}

async function comp(hash) {
    const check1 = await bcrypt.compare(myPlainTextPassword, hash);
    console.log('Comparing ', myPlainTextPassword, '->', check1);
    
    const check2 = await bcrypt.compare(otherPassword, hash);
    console.log('Comparing ', otherPassword, '->', check2);
}

gen();

comp('$2b$10$ZS/wvM4xHhN.U8DOMUYVeuDpaaAqX7r9w5Ii/ZHcMcAyoSiGA8JZ.');