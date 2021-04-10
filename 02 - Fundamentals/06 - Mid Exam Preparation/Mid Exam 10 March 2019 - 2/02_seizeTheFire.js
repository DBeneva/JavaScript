function seizeTheFire(input) {
    let cells = input.shift().split('#');
    let water = Number(input.shift());
    let putOutCells = [];
    let effort = 0;

    cells.forEach(x => {
        let [typeOfFire, value] = x.split(' = ');
        value = Number(value);
        putOutFire(value, typeOfFire);
    });

    console.log('Cells:');
    putOutCells.forEach(x => {
        console.log(` - ${x}`);
    });
    console.log(`Effort: ${effort.toFixed(2)}`);
    console.log(`Total Fire: ${putOutCells.reduce((a, b) => a + b, 0)}`);

    function putOutFire(value, typeOfFire) {
        if (isValid(value, typeOfFire)) {
            water -= value;
            effort += value * 0.25;
            putOutCells.push(value);
        }
    }

    function isValid(value, typeOfFire) {
        if (value <= water && water > 0) {
            switch (typeOfFire) {
                case 'High': if (value >= 81 && value <= 125) { return true; } break;
                case 'Medium': if (value >= 51 && value <= 80) { return true; } break;
                case 'Low': if (value >= 1 && value <= 50) { return true; } break;
                default: return false;
            }
        }
    }
}

seizeTheFire([
    'High = 150#Low = 55#Medium = 86#Low = 40#High = 110#Medium = 77',
    '220'
]);