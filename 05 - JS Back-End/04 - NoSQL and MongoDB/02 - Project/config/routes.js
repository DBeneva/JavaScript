const { catalog } = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { create, post: createPost } = require('../controllers/create');
const { details } = require('../controllers/details');
const { edit, post: editPost } = require('../controllers/edit');
const { notFound } = require('../controllers/notFound');
const { createAccessory, post: createAccessoryPost } = require('../controllers/createAccessory');

module.exports = (app) => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/create', create);
    app.post('/create', createPost);
    app.get('/create/accessory', createAccessory);
    app.post('/create/accessory', createAccessoryPost);
    app.get('/details/:id', details);
    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);

    app.get('*', notFound);
};