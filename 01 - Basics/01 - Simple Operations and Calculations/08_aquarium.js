function aquarium(length, width, height, occupiedPart) {
    let volumeDm = length * width * height / 1000;
    let volumeWater = volumeDm - occupiedPart / 100 * volumeDm;
    
    console.log(volumeWater.toFixed(3));
}

aquarium(85, 75, 47, 17);