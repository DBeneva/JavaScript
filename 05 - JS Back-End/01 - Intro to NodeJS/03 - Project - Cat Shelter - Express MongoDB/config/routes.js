const { addBreed, breedPost } = require('../controllers/addBreed');
const { addCat, catPost } = require('../controllers/addCat');
const { home } = require('../controllers/home');

module.exports = (app) => {
    app.get('/', home);
    app.get('/breeds/add', addBreed);
    app.post('/breeds/add', breedPost);
    app.get('/cats/add', addCat);
    app.post('/cats/add', catPost);
};