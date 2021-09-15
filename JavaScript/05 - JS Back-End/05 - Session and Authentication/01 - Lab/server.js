const express = require('express');
const bodyParser = require('express').urlencoded;
const expressSession = require('express-session');

const app = express();
const routes = require('./controllers');
const auth = require('./auth');

app.use(bodyParser({ extended: false }));
app.use(expressSession({
    secret: 'my random secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
app.use(auth);

routes(app);

app.post('/register', async (req, res) => {
    await req.register(req.body.username, req.body.password);
    res.redirect('/login');
});

app.post('/login', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const passwordsMatch = await req.login(username, password);

    if (passwordsMatch) {
        res.redirect('/');
    } else {
        res.status(403).send('Wrong password');
    }
});

app.listen(3000, () => console.log('Server listening on port 3000...'));