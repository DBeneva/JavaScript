function triangleArea(input) {
    let y1 = Number(input[1]);
    let x2 = Number(input[2]);
    let y2 = Number(input[3]);
    let x3 = Number(input[4]);
    let h = Math.abs(y1 - y2);
    let side = Math.abs(x2 - x3);
    let area = side * h / 2;
    
    console.log(area);
}

triangleArea(['5', '-2', '6', '1', '1', '1']);