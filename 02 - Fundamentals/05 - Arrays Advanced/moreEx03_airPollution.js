function airPollution(map, forces) {
    for (let i = 0; i < map.length; i++) {
        map[i] = map[i].split(' ').map(Number);
    }

    for (let i = 0; i < forces.length; i++) {
        let force = forces[i].split(' ')[0];
        let number = Number(forces[i].split(' ')[1]);

        switch (force) {
            case 'breeze':
                for (let i = 0; i < map.length; i++) {
                    map[number][i] = Math.max(0, map[number][i] - 15);
                }
                break;

            case 'gale':
                for (let i = 0; i < map.length; i++) {
                    map[i][number] = Math.max(0, map[i][number] - 20);
                }
                break;

            case 'smog':
                for (let i = 0; i < map.length; i++) {
                    for (let j = 0; j < map.length; j++) {
                        map[i][j] += number;
                    }
                }
                break;
        }
    }

    let pollutedBlocks = [];
    
    for (let i = 0; i < map.length; i++) {
        for (let j = 0; j < map.length; j++) {
            if (map[i][j] >= 50) {
                pollutedBlocks.push(`[${i}-${j}]`);
            }
        }
    }

    if (pollutedBlocks.length > 0) {
        console.log(`Polluted areas: ${pollutedBlocks.join(', ')}`);
    } else {
        console.log('No polluted areas');
    }
}

airPollution(['5 7 2 14 4',
    '21 14 2 5 3',
    '3 16 7 42 12',
    '2 20 8 39 14',
    '7 34 1 10 24'],
    ['breeze 1', 'gale 2', 'smog 35']);