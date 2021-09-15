function worldTour([destinations, ...input]) {

    let actions = {
        'Add Stop': ([index, string]) => {
            index = Number(index);

            if (destinations[index]) {
                let first = destinations.substring(0, index);
                let second = destinations.substring(index);
                destinations = first + string + second;
            }

            return console.log(destinations);
        },
        'Remove Stop': (params) => {
            let [start, end] = [...params].map(Number);
            
            if (destinations[start] && destinations[end]) {
                let first = destinations.substring(0, start);
                let second = destinations.substring(end + 1);
                destinations = first + second;
            }

            return console.log(destinations);
        },
        Switch([oldString, newString]) {
            if (destinations.includes(oldString)) {
                destinations = destinations.replace(new RegExp(oldString, 'g'), newString);
            }

            return console.log(destinations);
        },
        Travel() {
            console.log(`Ready for world tour! Planned stops: ${destinations}`);
        }
    };

    input.forEach(instruction => {
        let [command, ...params] = instruction.split(':');
        actions[command](params);
    });
}

worldTour([
    'Hawai::Cyprys-Greece',
    'Add Stop:7:Rome',
    'Remove Stop:11:16',
    'Switch:Hawai:Bulgaria',
    'Travel'
  ]);