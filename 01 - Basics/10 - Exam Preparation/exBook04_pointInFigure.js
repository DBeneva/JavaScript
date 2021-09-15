function pointInFigure(input) {
    let x = Number(input[0]);
    let y = Number(input[1]);
    let inVerticalRectangle = x >= 4 && x <= 10 && y <= 3 && y >= -5;
    let inHorizontalRectangle = x >= 2 && x <= 12 && y <= 1 && y >= -3;
 
    if (inVerticalRectangle || inHorizontalRectangle) {
        console.log('in');
    } else {
        console.log('out');
    }
}

pointInFigure(['11', '-5']);