function fruit(type, weightGrams, priceKg) {
    let weightKg = weightGrams / 1000;
    console.log(`I need $${(weightKg * priceKg).toFixed(2)} to buy ${weightKg.toFixed(2)} kilograms ${type}.`);
}

fruit('apple', 1563, 2.35);