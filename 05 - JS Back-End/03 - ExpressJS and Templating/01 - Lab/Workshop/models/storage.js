const fs = require('fs').promises;
const uniqid = require('uniqid');

// load and parse data file
// provide ability to:
// - read all entries
// - read single entry by ID
// - add new entry
// * get matching entries by search criteria

let data = {};


// "asdf1234": {
//     "name": "",
//     "description": "",
//     "imageUrl": "",
//     "difficulty": ""
// }

async function init() {
    try {
        data = JSON.parse(await fs.readFile('./models/data.json')); // relative path from index.js
    } catch (err) {
        console.error('Error reading database');
    }

    return (req, res, next) => {
        req.storage = {
            getAll,
            getById,
            create
        };

        next();
    };
}

async function getAll() {
    return Object
        .entries(data)
        .map(([id, v]) => Object.assign({}, { id }, v));
}

async function getById(id) {
    return data[id];
}

async function create(cube) {
    const id = uniqid();
    data[id] = cube;

    try {
        await fs.writeFile('./models/data.json', JSON.stringify(data));
    } catch (err) {
        console.error('Error writing out database');
    }
}

module.exports = {
    init,
    getAll,
    getById,
    create
};