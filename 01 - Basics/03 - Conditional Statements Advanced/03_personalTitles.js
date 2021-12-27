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

printPersonalTitle([17, 'm']);