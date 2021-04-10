function getPersonalTitle([age, sex]) {
    age = Number(age);
    let title = '';

    if (sex == 'm') {
        if (age < 16) {
            title = 'Master';
        } else {
            title = 'Mr.';
        }
    } else if (sex == 'f') {
        if (age < 16) {
            title = 'Miss';
        } else {
            title = 'Ms.';
        }
    }

    return title;
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