function printFishTankCapacity([
    length, width, height, notAvailablePercentage
]) {
    const fishTankVolume = length * width * height / 1000;
    const fishTankCapacity =
        fishTankVolume * (1 - notAvailablePercentage / 100);
    
    console.log(fishTankCapacity.toFixed(3));
}

printFishTankCapacity([85, 75, 47, 17]);
printFishTankCapacity(['85', '75', '47', '17']);