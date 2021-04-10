function login(password) {
    if (password == 's3cr3t!P@ssw0rd') {
        return 'Welcome';
    } else {
        return 'Wrong password!';
    }
}

function loginTern(password) {
    return password == 's3cr3t!P@ssw0rd' ? 'Welcome' : 'Wrong password!';
}

console.log(login('fdfdg'));

console.log('====================');

console.log(loginTern('123456'));