const express = require('express');
const bodyParser = require('express').urlencoded;
const expressSession = require('express-session');

const routes = require('./controllers');

const app = express();
app.use(bodyParser({ extended: false }));
app.use(expressSession({
    secret: 'my random secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

routes(app);

app.post('/register', (req, res) => {
    const username = req.body.username;

    users[username] = {
        id: ('0000' + Math.random() * 9999 | 0).toString(16).slice(-4),
        password: req.body.password
    };

    res.redirect('/login');
});

app.post('/login', (req, res) => {
    const user = users[req.body.username];

    if (user && user.password == req.body.password) {
        req.session.user = user;
    } else {
        res.send('Wrong password');
    }

    res.redirect('/');
});

app.all('*', (req, res, next) => {
    console.log();
});

app.listen(3000, () => console.log('Server listening on port 3000...'));