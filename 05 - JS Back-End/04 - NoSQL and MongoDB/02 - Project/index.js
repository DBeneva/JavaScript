const express = require('express');
const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');

require('dotenv/config');

const { init: storage } = require('./services/storage');

start();

async function start() {
    const port = process.env.PORT || 5000;
    const app = express();

    expressConfig(app);
    await databaseConfig(app); // must be before routesConfig!
    routesConfig(app);

    app.listen(port, () => console.log(`Server listening on port ${port}...`));
}