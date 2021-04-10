function listOfProducts(input) {
    let result = input.sort();

    for (let i = 0; i < result.length; i++) {
        console.log(`${i + 1}.${result[i]}`);;
    }
}

listOfProducts(['Potatoes', 'Tomatoes', 'Onions', 'Apples']);