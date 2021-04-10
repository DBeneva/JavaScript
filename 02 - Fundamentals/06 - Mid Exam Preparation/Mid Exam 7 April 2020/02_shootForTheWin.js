function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let shotTargets = 0;

    while (input.length > 0) {
        let index = Number(input.shift());
        let target = targets[index];

        if (isNaN(index)) {
            console.log(`Shot targets: ${shotTargets} -> ${targets.join(' ')}`);
        } else if (target != -1 && target != undefined) {
            for (let i = 0; i < targets.length; i++) {
                if (targets[i] != -1) {
                    if (targets[i] > target) {
                        targets[i] -= target;
                    } else {
                        targets[i] += target;
                    }
                }
            }

            targets[index] = -1;
            shotTargets++;
        }
    }
}

shootForTheWin(['30 30 12 60 54 66', '5', '2', '4', '0', 'End']);