function changeTiles(input) {
    let money = Number(input[0]);
    let floorWidth = Number(input[1]);
    let floorLength = Number(input[2]);
    let triangleSide = Number(input[3]);
    let triangleHeight = Number(input[4]);
    let tilePrice = Number(input[5]);
    let workerPayment = Number(input[6]);
    let floorArea = floorWidth * floorLength;
    let triangleArea = triangleSide * triangleHeight / 2;
    let numberOfTiles = Math.ceil(floorArea / triangleArea) + 5;
    let totalCost = numberOfTiles * tilePrice + workerPayment;
    let difference = Math.abs(money - totalCost);
    
    if (totalCost <= money) {
        console.log(`${difference.toFixed(2)} lv left.`);
    } else {
        console.log(`You'll need ${difference.toFixed(2)} lv more.`);
    }
}

changeTiles(['500', '3', '2.5', '0.5', '0.7', '7.80', '100']);