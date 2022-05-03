const { getAll } = require('./home');
const { addBreed } = require('./addBreed');
const { addCat } = require('./addCat');
const { edit, getById, getAllBreeds } = require('./edit');
const { shelter } = require('./shelter');

async function init() {
    return (req, res, next) => {
        req.storage = {
            getAll,
            addBreed,
            getAllBreeds,
            addCat,
            getById,
            edit,
            shelter
        }

        next();
    };
}

module.exports = {
    init,
    getAll,
    addBreed,
    getAllBreeds,
    addCat,
    getById,
    edit,
    shelter
};