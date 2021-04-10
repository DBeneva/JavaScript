function cone(radius, height) {
    let volume = 1 / 3 * Math.PI * Math.pow(radius, 2) * height;
    let slant = Math.sqrt(Math.pow(radius, 2) + Math.pow(height, 2));
    let area = Math.PI * Math.pow(radius, 2) + Math.PI * radius * slant;

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);
}

cone(3, 5);