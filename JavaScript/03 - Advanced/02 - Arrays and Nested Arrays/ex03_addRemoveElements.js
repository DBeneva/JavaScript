function addRemoveElements(input) {
    let initial = 1;
    let array = [];

    let actions = {
        add() {
            array.push(initial);
        },
        remove() {
            array.pop();
        }
    };

    input.forEach(command => {
        if (actions[command]) {
            actions[command](array);
            initial++;
        }
    });

    let output = array.length == 0 ? 'Empty' : array.join('\n');
    console.log(output);
}

addRemoveElements(['add', 
'add', 
'add', 
'add']
);