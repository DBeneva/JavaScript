const express = require('express');
const hbs = require('express-handlebars');
const cookieParser = require('cookie-parser');

module.exports = (app) => {    
    app.engine('.hbs', hbs.create({
        extname: '.hbs',
        helpers: {
            select: function (value, options) {
                return options.fn()
                .split('\n')
                .map(v => {
                    const t = `value="${value}"`;
                    return new RegExp(t).test(v) ? v.replace(t, t + ' selected') : v;
                })
                .join('\n');
            }
        }
    }).engine);
    app.set('view engine', '.hbs');
    app.use('/static', express.static('static'));
    app.use('/js', express.static('js'));
    app.use(express.urlencoded({ extended: false }));
    app.use(cookieParser());
};