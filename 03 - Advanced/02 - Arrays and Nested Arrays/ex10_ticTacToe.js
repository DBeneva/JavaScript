function ticTacToe(input) {
    let dashboard = [[false, false, false],
    [false, false, false],
    [false, false, false]];

    let mark = 'X';

    for (let i = 0; i < input.length; i++) {
        let [row, col] = input[i].split(' ').map(Number);
        let dashboardFull = true;


        if (dashboard[row][col] == false) {
            dashboard[row][col] = mark;
        } else {
            console.log('This place is already taken. Please choose another!');
            continue;
        }

        if (dashboard[row].join('') == mark.repeat(3) ||
            (dashboard[1][col] == dashboard[0][col] && dashboard[1][col] == dashboard[2][col] && dashboard[0][col] != false) ||
            (dashboard[0][0] == dashboard[1][1] && dashboard[1][1] == dashboard[2][2] && dashboard[0][0] != false) ||
            (dashboard[0][2] == dashboard[1][1] && dashboard[1][1] == dashboard[2][0] && dashboard[0][2] != false)) {
            console.log(`Player ${mark} wins!`);
            break;
        }

        for (let row of dashboard) {
            if (row.includes(false)) {
                dashboardFull = false;
                break;
            }
        }

        if (dashboardFull) {
            console.log('The game ended! Nobody wins :(');
            break;
        }

        if (mark == 'X') {
            mark = 'O';
        } else {
            mark = 'X';
        }
    }

    for (let row of dashboard) {
        console.log(row.join('\t'));
    }
}

// ticTacToe(["0 1",
//     "0 0",
//     "0 2",
//     "2 0",
//     "1 0",
//     "1 1",
//     "1 2",
//     "2 2",
//     "2 1",
//     "0 0"]
// );

// console.log('-----');

// ticTacToe(["0 0",
// "0 0",
// "1 1",
// "0 1",
// "1 2",
// "0 2",
// "2 2",
// "1 2",
// "2 2",
// "2 1"]
// );

console.log('-----');

ticTacToe(["0 1",
    "0 0",
    "0 2",
    "2 0",
    "1 0",
    "1 2",
    "1 1",
    "2 1",
    "2 2",
    "0 0"]
);