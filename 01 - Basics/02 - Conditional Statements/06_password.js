function password(password) {
    if (password == 's3cr3t!P@ssw0rd') {
        console.log('Welcome');
    } else {
        console.log('Wrong password!');
    }
}

function passwordTernary(password) {
    console.log(password == 's3cr3t!P@ssw0rd' ? 'Welcome' : 'Wrong password!');
}

password('fdfdg');

console.log('====================');

passwordTernary('123456');