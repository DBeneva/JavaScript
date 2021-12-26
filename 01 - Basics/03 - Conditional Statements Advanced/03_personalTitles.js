function printPersonalTitle([age, sex]) {
    age = Number(age);

    if (sex == 'm') console.log(getMaleTitle());
    else if (sex == 'f') console.log(getFemaleTitle());
    
    function getMaleTitle() {
        if (age < 16) return 'Master';
        else return 'Mr.';
    }
    
    function getFemaleTitle() {
        if (age < 16) return 'Miss';
        else return 'Ms.';
    }
}

function printPersonalTitleObject([age, sex]) {
    age = Number(age);

    const titles = {
        m: age < 16 ? 'Master' : 'Mr.',
        f: age < 16 ? 'Miss' : 'Ms.'
    };

    console.log(titles[sex]);
}

printPersonalTitle([17, 'm']);
console.log('====================');
printPersonalTitleObject([17, 'm']);