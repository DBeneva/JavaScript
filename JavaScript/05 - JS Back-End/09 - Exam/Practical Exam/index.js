const express = require('express');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const middlewaresConfig = require('./config/middlewares');
const routesConfig = require('./config/routes');
const { PORT } = require('./config');

start();

async function start() {
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    await middlewaresConfig(app);
    routesConfig(app);

    app.listen(PORT, () => console.log(`Application started on http://localhost:${PORT}`));
}