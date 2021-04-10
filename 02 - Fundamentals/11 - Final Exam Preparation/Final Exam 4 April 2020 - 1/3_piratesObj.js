function pirates(input) {
    let targetedCities = input.slice(0, input.indexOf('Sail'));
    let events = input.slice(input.indexOf('Sail') + 1, input.indexOf('End'));
    
    let actions = {
        Plunder(cities, city, [people, gold]) {
            cities[city].population -= Number(people);
            cities[city].gold -= Number(gold);
            console.log(`${city} plundered! ${gold} gold stolen, ${people} citizens killed.`);

            if (cities[city].population <= 0 || cities[city].gold <= 0) {
                console.log(`${city} has been wiped off the map!`);
                delete cities[city];
            }            
        },
        Prosper(cities, city, [gold]) {
            if (Number(gold) < 0) {
                console.log(`Gold added cannot be a negative number!`);
            } else {
                cities[city].gold += Number(gold);
                console.log(`${gold} gold added to the city treasury. ${city} now has ${cities[city].gold} gold.`);
            }
        }
    };
    
    let cities = {};

    targetedCities.forEach(target => {
        let [city, population, gold] = target.split('||');
        if (!cities[city]) {
            cities[city] = { population: 0, gold: 0 };
        }
        cities[city].population += Number(population);
        cities[city].gold += Number(gold);
    });
    
    events.forEach(event => {
        let [action, city, ...params] = event.split('=>');
        actions[action](cities, city, params);
    });

    let sorted = Object.entries(cities).sort(sortCities);

    if (sorted.length > 0) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        sorted.map(city => {
            console.log(`${city[0]} -> Population: ${city[1].population} citizens, Gold: ${city[1].gold} kg`);
        });
    } else {
        console.log(`Ahoy, Captain! All targets have been plundered and destroyed!`);
    }
    
    
    function sortCities([cityA, infoA], [cityB, infoB]) {
        return infoB.gold - infoA.gold || cityA.localeCompare(cityB);
    }
}

pirates([
    'Nassau||95000||1000',
    'San Juan||930000||1250',
    'Campeche||270000||690',
    'Port Royal||320000||1000',
    'Port Royal||100000||2000',
    'Sail',
    'Prosper=>Port Royal=>-200',
    'Plunder=>Nassau=>94000=>750',
    'Plunder=>Nassau=>1000=>150',
    'Plunder=>Campeche=>150000=>690',
    'Plunder=>Port Royal=>420000=>690',
    'Plunder=>San Juan=>930000=>690',
    'End'
  ]
  );