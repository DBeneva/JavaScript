const { catalog } = require('../controllers/catalog');
const { about } = require('../controllers/about');
const { create, post: createPost } = require('../controllers/create');
const { details, attach, attachPost } = require('../controllers/details');
const { edit, post: editPost } = require('../controllers/edit');
const { createSticker, post: stickerPost } = require('../controllers/sticker');
const { post: commentPost } = require('../controllers/comments');
const { notFound } = require('../controllers/notFound');

module.exports = (app) => {
    app.get('/', catalog);
    app.get('/about', about);
    app.get('/create', create);
    app.post('/create', createPost);
    app.get('/sticker/create', createSticker);
    app.post('/sticker/create', stickerPost);
    app.get('/details/:id', details);
    app.get('/details/:id/attach', attach);
    app.post('/details/:cubeId/attach', attachPost);
    app.get('/edit/:id', edit);
    app.post('/edit/:id', editPost);
    app.post('/comments/:cubeId/create', commentPost);

    app.get('*', notFound);
};