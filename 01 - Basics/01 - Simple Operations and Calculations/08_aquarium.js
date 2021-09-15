function getVolumeWater(length, width, height, occupiedPart) {
    const volumeDm = length * width * height / 1000;
    const volumeWater = volumeDm - occupiedPart / 100 * volumeDm;
    
    return volumeWater.toFixed(3);
}

console.log(getVolumeWater(85, 75, 47, 17));