function searchForANumber(numbers, manipulations) {
    let toTake = manipulations[0];
    let toDelete = manipulations[1];
    let toSearchFor = manipulations[2];

    let result = numbers.slice(0, toTake)
    result.splice(0, toDelete);
    result = result.filter(x => x == toSearchFor);

    console.log(`Number ${toSearchFor} occurs ${result.length} times.`);
}

searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);