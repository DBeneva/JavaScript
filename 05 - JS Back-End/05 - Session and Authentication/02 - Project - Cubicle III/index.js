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

    app.use(logger());
    await databaseConfig(app); // must be before routesConfig!
    expressConfig(app);
    app.use(await storage());
    routesConfig(app);

    app.listen(PORT, () => console.log(`Server listening on port ${PORT}...`));
}