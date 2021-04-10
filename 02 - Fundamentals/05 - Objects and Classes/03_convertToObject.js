function convertToObject(string) {
    let convertedToObject = JSON.parse(string);
    
    for (let key of Object.keys(convertedToObject)) {
        console.log(`${key}: ${convertedToObject[key]}`);
    }
}

convertToObject('{"name": "George", "age": 40, "town": "Sofia"}');