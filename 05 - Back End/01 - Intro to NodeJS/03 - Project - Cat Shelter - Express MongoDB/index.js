const express = require('express');
require('dotenv/config');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const { init: storage } = require('./services/storage');

start()

async function start() {
    const port = process.env.PORT;
    const app = express();
    
    app.use(await storage());

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    app.listen(port, () => console.log(`Server listening on port ${port}...`));
}