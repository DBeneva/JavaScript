const express = require('express');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const { PORT } = require('./config');

const storage = require('./middlewares/storage');
const logger = require('./middlewares/logger');

start();

async function start() {
    const app = express();

    app.use(logger()); // console.log('>>>', req.method, req.url);
    await databaseConfig(app); // must be before routesConfig!; connection to DB
    expressConfig(app); // set express, hbs, static, body parser, cookie parser, req.auth = {register, login, logout}
    app.use(await storage()); // req.storage = {getAll, getById, create, edit, createComment, attachSticker, createSticker, getAllStickers}
    routesConfig(app);

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
}