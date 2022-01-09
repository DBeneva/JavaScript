function cake(input) {
    const pieces = input.shift() * input.shift();
    let piecesTaken = 0;
    
    input.every(p => {
        if (piecesTaken >= pieces || p == 'STOP') return false;
        else return piecesTaken += Number(p);
    });

    const difference = Math.abs(pieces - piecesTaken);

    console.log(
        piecesTaken > pieces
            ? `No more cake left! You need ${difference} pieces more.`
            : `${difference} pieces are left.`
    );
}

cake([10, 2, 2, 4, 6, 'STOP']);