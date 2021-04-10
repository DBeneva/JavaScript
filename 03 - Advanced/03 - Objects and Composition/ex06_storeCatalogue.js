function storeCatalogue(input) {
    let catalogue = {};

    input.forEach(product => {
        let [name, price] = product.split(' : ');
        let firstLetter = name[0];
        
        if (!catalogue[firstLetter]) {
            catalogue[firstLetter] = [];
        }

        catalogue[firstLetter].push({ name, price: Number(price) });
    });

    Object.entries(catalogue)
        .sort((a, b) => a[0].localeCompare(b[0]))
        .forEach(([letter, products]) => {
            console.log(letter);
            products
                .sort((a, b) => a.name.localeCompare(b.name))
                .forEach(({ name, price }) => {
                console.log(`  ${name}: ${price}`);
            });
    });
}

storeCatalogue(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']
);