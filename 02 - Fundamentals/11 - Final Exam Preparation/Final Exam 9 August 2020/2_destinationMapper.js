function destinationMapper(string) {
    let valid = /([=\/])(?<place>[A-Z][A-Za-z]{2,})\1/g;
    let destinations = [];
    let travelPoints = 0;

    while (destination = valid.exec(string)) {
        destinations.push(destination.groups.place);
        travelPoints += destination.groups.place.length;
    }

    console.log(`Destinations: ${destinations.join(', ')}`);
    console.log(`Travel Points: ${travelPoints}`);    
}

destinationMapper('ThisIs some InvalidInput');