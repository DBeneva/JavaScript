function cake(input) {
    let cakeWidth = Number(input[0]);
    let cakeLength = Number(input[1]);
    let piecesTotal = cakeWidth * cakeLength;
    let piecesTaken = 0;
    let i = 2;
    
    while (piecesTaken <= piecesTotal) {
        if (input[i] == 'STOP') {
            break;
        }

        piecesTaken += Number(input[i]);
        i++;
    }

    let piecesLeft = Math.abs(piecesTotal - piecesTaken);
    
    if (piecesTaken > piecesTotal) {
        console.log(`No more cake left! You need ${piecesLeft} pieces more`);
    } else {
        console.log(`${piecesLeft} pieces are left.`);
    }
}

cake([10, 2, 2, 4, 6, 'STOP']);