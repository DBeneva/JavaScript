const { catalog } = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { create, post: createPost } = require('../controllers/create');
const { details, attach } = require('../controllers/details');
const { edit, post: editPost } = require('../controllers/edit');
const { notFound } = require('../controllers/notFound');
const { createAccessory, post: accessoryPost } = require('../controllers/createAccessory');
const { post: commentPost } = require('../controllers/comments');

module.exports = (app) => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/create', create);
    app.post('/create', createPost);
    app.get('/accessory/create', createAccessory);
    app.post('/accessory/create', accessoryPost);
    app.get('/details/:id', details);
    app.get('/details/:id/attach', attach);
    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);
    app.post('/comments/:cubeId/create', commentPost);

    app.get('*', notFound);
};