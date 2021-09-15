const express = require('express');
const expressSession = require('express-session');
const routes = require('./controllers');
const app = express();

const users = {};

app.use(express.urlencoded({ extended: false }));
app.use(expressSession({
    secret: 'my random secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));

routes(app);

app.listen(3000, () => console.log('Server listening on port 3000...'));