function timeToWlak(steps, footprintM, speed) {
    let distance = steps * footprintM / 1000;
    let timeH = distance / speed + Math.floor(distance / 0.5) / 60;
    let hours = Math.floor(timeH).toString().padStart(2, '0');
    let minutes = Math.floor(timeH * 60).toString().padStart(2, '0');
    let seconds = Math.round((timeH * 60 - minutes) * 60).toString().padStart(2, '0');
    console.log(`${hours}:${minutes}:${seconds}`);
}

timeToWlak(2564, 0.70, 5.5);