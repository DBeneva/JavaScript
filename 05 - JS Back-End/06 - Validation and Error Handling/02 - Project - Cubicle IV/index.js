const express = require('express');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const middlewaresConfig = require('./config/middlewares');
const { PORT } = require('./config');

start();

async function start() {
    const app = express();

    expressConfig(app); // set express, hbs, static, body parser, cookie parser
    await databaseConfig(app); // must be before routesConfig!; connection to DB
    await middlewaresConfig(app); // req: storage, auth, guards, preloadCube; logger
    routesConfig(app); // products, stickers, comments, auth

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
}