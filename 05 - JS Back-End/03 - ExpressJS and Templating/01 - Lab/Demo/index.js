const path = require('path');

const express = require('express');
const catalogRouter = require('./catalog');
const fallback = require('./fallback');
const isAdmin = require('./guard');
const logger = require('./logger');
const app = express();

app.use('/static', express.static('static'));

app.use(catalogRouter);
app.use(logger);

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/static/index.html');
});

app.get('/admin', isAdmin, (req, res) => {
    res.send('Admin Page');
});

app.all('*', (req, res) => {
    res.status(404).send('404 Not Found');
});

app.use(fallback);

app.listen(3000, () => console.log('Server listening on port 3000...'));