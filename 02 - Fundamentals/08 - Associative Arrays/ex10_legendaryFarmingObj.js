function legendaryFarming(input) {
    input = input.split(' ');
    let materials = {};
    let keyMaterials = { shards: 0, fragments: 0, motes: 0 };
    let legendary = { shards: 'Shadowmourne', fragments: 'Valanyr', motes: 'Dragonwrath' };

    while (input.length > 0) {
        let quantity = Number(input.shift());
        let material = input.shift().toLowerCase();

        if (keyMaterials.hasOwnProperty(material)) {
            keyMaterials[material] += quantity;

            if (keyMaterials[material] >= 250) {
                console.log(`${legendary[material]} obtained!`);
                keyMaterials[material] -= 250;
                break;
            }
        } else {
            materials[material] = materials.hasOwnProperty(material) ?
                materials[material] + quantity : quantity;
        }
    }

    Object.entries(keyMaterials).sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}: ${x[1]}`));

    Object.entries(materials).sort((a, b) => a[0].localeCompare(b[0]))
        .map(x => console.log(`${x[0]}: ${x[1]}`));
}

legendaryFarming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver');