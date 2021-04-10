function cars(input) {    
    let objects = {};
    
    let commands = {
        create(name, _, parent) {
            objects[name] = Object.create(parent ? objects[parent] : {});
        },
        set(name, key, value) {
            objects[name][key] = value;
        },
        print(name = {}) {
            let output = [];
            
            for (let key in objects[name]) {
                output.push(`${key}:${objects[name][key]}`);
            };
            
            console.log(output.join(', '));
        }
    }

    input.forEach(x => {
        let [command, ...params] = x.split(' ');
        commands[command](...params);
    });
}

cars(['create c1',
'create c2 inherit c1',
'set c1 color red',
'set c2 model new',
'print c1',
'print c2']
);