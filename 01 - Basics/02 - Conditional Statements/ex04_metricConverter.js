function convertUnits([num, from, to]) {
    num = Number(num);
    let result = 0;

    if (from == 'mm') result = convertFromMm();
    else if (from == 'cm') result = convertFromCm(); 
    else if (from == 'm') result = convertFromM();
    
    console.log(result.toFixed(3));
    
    function convertFromMm() {
        if (to == 'cm') return num / 10;
        else if (to == 'm') return num / 1000;
    }
    
    function convertFromCm() {
        if (to == 'mm') return num * 10;
        else if (to == 'm') return num / 100;
    }
    
    function convertFromM() {
        if (to == 'mm') return num * 1000;
        else if (to == 'cm') return num * 100;
    }
}

convertUnits([12, 'mm', 'm']);