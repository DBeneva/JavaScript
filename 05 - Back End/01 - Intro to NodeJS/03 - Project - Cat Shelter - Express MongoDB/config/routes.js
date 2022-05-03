const { addBreed, breedPost } = require('../controllers/addBreed');
const { addCat, catPost } = require('../controllers/addCat');
const { edit, editPost } = require('../controllers/edit');
const { home } = require('../controllers/home');
const { shelter, shelterPost } = require('../controllers/shelter');

module.exports = (app) => {
    app.get('/', home);
    app.get('/breeds/add', addBreed);
    app.post('/breeds/add', breedPost);
    app.get('/cats/add', addCat);
    app.post('/cats/add', catPost);
    app.get('/cats/edit/:id', edit);
    app.get('/cats/edit/:id', edit);
    app.post('/cats/edit/:id', editPost);
    app.get('/cats/shelter/:id', shelter);
    app.post('/cats/shelter/:id', shelterPost);
};