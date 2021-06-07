const { getAll } = require('./home');
const { addBreed } = require('./addBreed');
const { getAllBreeds } = require('./getAllBreeds');

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            addBreed,
            getAllBreeds
        }

        next();
    };
}

module.exports = {
    init,
    getAll,
    addBreed,
    getAllBreeds
};