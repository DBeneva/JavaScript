function printPersonalTitle([age, sex]) {
    age = Number(age);

    const titles = {
        m: age < 16 ? 'Master' : 'Mr.',
        f: age < 16 ? 'Miss' : 'Ms.'
    };

    console.log(titles[sex]);
}

printPersonalTitle([17, 'm']);