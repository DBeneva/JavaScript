function chessBoard(n) {
    console.log('<div class="chessboard">');

    for (let row = 1; row <= n; row++) {
        console.log('  <div>');

        for (let col = 1; col <= n; col++) {
            if ((row % 2 == 0 && col % 2 == 0) || (row % 2 == 1 && col % 2 == 1)) {
                console.log('    <span class="black"></span>');
            } else {
                console.log('    <span class="white"></span>');
            }
        }

        console.log('  </div>');
    }

    console.log('  </div>');
}

chessBoard(3);