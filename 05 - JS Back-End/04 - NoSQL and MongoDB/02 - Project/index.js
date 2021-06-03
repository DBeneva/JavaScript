const express = require('express');
const hbs = require('express-handlebars');
const mongoose = require('mongoose');
require('dotenv/config');

const { init: storage } = require('./models/storage');

const { catalog } = require('./controllers/catalog');
const { about } = require('./controllers/about');
const { create, post: createPost } = require('./controllers/create');
const { details } = require('./controllers/details');
const { edit, post: editPost } = require('./controllers/edit');
const { notFound } = require('./controllers/notFound');
const { createAccessory, post: createAccessoryPost } = require('./controllers/createAccessory');

start();

async function start() {
    const port = process.env.PORT || 5000;
    const app = express();
    await mongoose.connect('mongodb://localhost:27017/unidb', {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    app.engine('.hbs', hbs({ extname: '.hbs' }));
    app.set('view engine', '.hbs');
    app.use('/static', express.static('static'));
    app.use('/js', express.static('js'));
    app.use(express.urlencoded({ extended: false }));
    app.use(await storage());

    app.get('/', catalog);
    app.get('/about', about);
    app.get('/create', create);
    app.post('/create', await createPost);
    app.get('/create/accessory', createAccessory);
    app.post('/create/accessory', await createAccessoryPost);
    app.get('/details/:id', await details);
    app.get('/edit/:id', await edit);
    app.post('/edit/:id', await editPost);

    app.get('*', notFound);

    app.listen(port, () => console.log(`Server listening on port ${port}...`));
}

