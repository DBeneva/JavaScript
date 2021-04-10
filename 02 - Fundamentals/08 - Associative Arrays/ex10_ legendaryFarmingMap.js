function legendaryFarming(input) {
    input = input.split(' ');
    let materials = new Map();
    let keyMaterials = new Map([['shards', 0], ['fragments', 0], ['motes', 0]]);
    let legendary = new Map([['shards', 'Shadowmourne'], ['fragments', 'Valanyr'], ['motes', 'Dragonwrath']]);

    while (input.length > 0) {
        let quantity = Number(input.shift());
        let material = input.shift().toLowerCase();

        if (keyMaterials.has(material)) {
            keyMaterials.set(material, keyMaterials.get(material) + quantity);

            if (keyMaterials.get(material) >= 250) {
                console.log(`${legendary.get(material)} obtained!`);
                keyMaterials.set(material, keyMaterials.get(material) - 250);
                break;
            }
        } else {
            materials.set(material, materials.has(material) ?
                materials.get(material) + quantity : quantity);
        }
    }

    [...keyMaterials].sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}: ${x[1]}`));
    [...materials].sort((a, b) => a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}: ${x[1]}`));
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');