function netherRealms([input]) {
    input = input.split(/\s*,\s*/g);
    let demons = {};

    input.forEach(demon => {
        let letters = demon.match(/[^\d\.\/\+\*\-]/g);
        let health = letters ?
            letters.map(x => x.charCodeAt()).reduce((a, b) => a + b) : 0;

        let numbers = demon.match(/[\+\-]?\d+(\.\d+)?/g);
        let damage = numbers ?
            numbers.map(Number).reduce((a, b) => a + b) : 0;

        let multiplication = demon.match(/\*/g);
        damage *= multiplication ? 2 ** multiplication.length : 1;
        let division = demon.match(/\//g);
        damage /= division ? 2 ** division.length : 1;

        demons[demon] = { health: health, damage: damage };
    });

    Object.keys(demons)
        .sort((a, b) => a.localeCompare(b))
        .map(demon => {
            console.log(`${demon} - ${demons[demon].health} health, ${demons[demon].damage.toFixed(2)} damage`);
        });
}

netherRealms(['M3ph-0.5s-0.5t0.0**']);