const database = {};

function nextId() {
    let id;

    do {
        id = ('00000000' + (Math.random() * 99999999 | 0).toString(16)).slice(-8);
    } while (database[id] != undefined);
    
    return id;
}

function addItem(item) {
    database[id] = item;
}

module.exports = {};