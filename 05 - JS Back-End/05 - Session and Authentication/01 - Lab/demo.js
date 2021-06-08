const bcrypt = require('bcrypt');

const saltRounds = 10;
const myPlainTextPassword = 'password1';
const otherPassword = 'password2';

function gen() {
    bcrypt.genSalt(saltRounds, (err, salt) => {
        console.log(salt);
        bcrypt.hash(myPlainTextPassword, salt, (err, hash) => {
            console.log(hash); // $2b$09$pdhUAoT4qE0tmku.ZkXWROeLcJCy.LDR
        });
    });
}

function comp() {
    bcrypt.compare(otherPassword);
}

gen();