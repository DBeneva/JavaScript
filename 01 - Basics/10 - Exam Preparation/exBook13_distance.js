function distance(input) {
    let speed1 = Number(input[0]);
    let speed2 = speed1 + speed1 * 0.1;
    let speed3 = speed2 - speed2 * 0.05;
    let time1 = Number(input[1]) / 60;
    let time2 = Number(input[2]) / 60;
    let time3 = Number(input[3]) / 60;
    let distance1 = speed1 * time1;
    let distance2 = speed2 * time2;
    let distance3 = speed3 * time3;
    let distance = distance1 + distance2 + distance3;
    
    console.log(distance.toFixed(2));
}

distance(['90', '60', '70', '80']);