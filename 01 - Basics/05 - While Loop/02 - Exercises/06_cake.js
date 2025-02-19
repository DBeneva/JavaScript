function cake(input) {
    const pieces = input[0] * input[1];
    let piecesTaken = 0;

    for (let i = 2; input[i] !== 'STOP' && piecesTaken <= pieces; i++) {
        piecesTaken += Number(input[i]);
    }

    const difference = Math.abs(pieces - piecesTaken);

    console.log(
        piecesTaken > pieces
            ? `No more cake left! You need ${difference} pieces more.`
            : `${difference} pieces are left.`
    );
}

cake([10, 2, 2, 4, 6, 'STOP']);