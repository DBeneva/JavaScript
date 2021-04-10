function radioCrystals(input) {
    let index = 0;
    let targetThickness = input[index];
    index++;

    while (index < input.length) {
        let crystalThickness = input[index];
        
        console.log(`Processing chunk ${crystalThickness} microns`);
        
        crystalThickness = cut(crystalThickness, targetThickness);
        crystalThickness = lap(crystalThickness, targetThickness);
        crystalThickness = grind(crystalThickness, targetThickness);
        crystalThickness = etch(crystalThickness, targetThickness);

        if (crystalThickness == targetThickness) {
            console.log(`Finished crystal ${targetThickness} microns`);
        }
        
        index++;
    }

    function cut(crystalThickness, targetThickness) {
        let cutCounter = 0;

        while (crystalThickness / 4 >= targetThickness) {
            crystalThickness /= 4;
            cutCounter++;
        }
        
        if (cutCounter > 0) {
            console.log(`Cut x${cutCounter}`);
            crystalThickness = Math.floor(crystalThickness);
            console.log('Transporting and washing');
        }

        if (crystalThickness + 1 == targetThickness) {
            crystalThickness += 1;
            console.log('X-ray x1');
        }

        return crystalThickness;
    }

    function lap(crystalThickness, targetThickness) {
        let lapCounter = 0;

        while (crystalThickness - 0.2 * crystalThickness >= targetThickness) {
            crystalThickness -= 0.2 * crystalThickness;
            lapCounter++;
        }
        
        if (lapCounter > 0) {
            console.log(`Lap x${lapCounter}`);
            crystalThickness = Math.floor(crystalThickness);
            console.log('Transporting and washing');
        }

        if (crystalThickness + 1 == targetThickness) {
            crystalThickness += 1;
            console.log(`X-ray x1`);
        }

        return crystalThickness;
    }

    function grind(crystalThickness, targetThickness) {
        let grindCounter = 0;

        while (crystalThickness - 20 >= targetThickness) {
            crystalThickness -= 20;
            grindCounter++;
        }
        
        if (grindCounter > 0) {
            console.log(`Grind x${grindCounter}`);
            crystalThickness = Math.floor(crystalThickness);
            console.log('Transporting and washing');
        }

        if (crystalThickness + 1 == targetThickness) {
            crystalThickness += 1;
            console.log(`X-ray x1`);
        }

        return crystalThickness;
    }

    function etch(crystalThickness, targetThickness) {
        let etchCounter = 0;

        while (crystalThickness - 2 >= targetThickness - 1) {
            crystalThickness -= 2;
            etchCounter++;
        }

        if (etchCounter > 0) {
            console.log(`Etch x${etchCounter}`);
            crystalThickness = Math.floor(crystalThickness);
            console.log('Transporting and washing');
        }

        if (crystalThickness + 1 == targetThickness) {
            crystalThickness += 1;
            console.log(`X-ray x1`);
        }

        return crystalThickness;
    }
}

radioCrystals([2, 22]);