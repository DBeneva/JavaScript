function getPersonalTitle([age, sex]) {
    age = Number(age);

    if (sex == 'm') {
        if (age < 16) {
            return 'Master';
        } else {
            return 'Mr.';
        }
    } else if (sex == 'f') {
        if (age < 16) {
            return 'Miss';
        } else {
            return 'Ms.';
        }
    }
}

function getPersonalTitleObj([age, sex]) {
    age = Number(age);

    const titles = {
        m: age < 16 ? 'Master' : 'Mr.',
        f: age < 16 ? 'Miss' : 'Ms.'
    };

    return titles[sex];
}

console.log(getPersonalTitle([17, 'm']));

console.log('====================');

console.log(getPersonalTitleObj([17, 'm']));