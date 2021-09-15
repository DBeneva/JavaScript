function listProcessor(input) {
    let collection = [];

    let commands = {
        add(string) {
            collection.push(string);
        },
        remove(string) {
            while (collection.includes(string)) {
                collection.splice(collection.indexOf(string), 1);
            }
        },
        print() {
            console.log(collection.join(','));
        }
    }

    input.forEach(x => {
        let [command, string] = x.split(' ');
        
        if (commands[command]) {
            commands[command](string);
        }
    });
}

listProcessor(['add pesho', 'add george', 'add peter', 'remove peter','print']);