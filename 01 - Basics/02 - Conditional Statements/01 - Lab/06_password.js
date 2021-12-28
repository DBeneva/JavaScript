function login(password) {
    if (password == 's3cr3t!P@ssw0rd') console.log('Welcome');
    else console.log('Wrong password!');
}

function loginTernary(password) {
    console.log(
        password == 's3cr3t!P@ssw0rd'
            ? 'Welcome'
            : 'Wrong password!'
    );
}

login('fdfdg');
console.log('====================');
loginTernary('123456');