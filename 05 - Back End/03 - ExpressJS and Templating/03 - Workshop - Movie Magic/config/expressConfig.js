const express = require('express');
const hbs = require('express-handlebars');
// const path = require('path');

function expressConfig(app) {
    app.engine('.hbs', hbs.engine({ extname: '.hbs' }));
    app.set('view engine', '.hbs');
    app.use('/static', express.static('static'));
    app.use(express.urlencoded({ extended: true }));
    // app.use(cookieParser());
}

module.exports = expressConfig;