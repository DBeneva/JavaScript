const express = require('express');

const expressConfig = require('./config/express');
const databaseConfig = require('./config/database');
const routesConfig = require('./config/routes');
const { PORT } = require('./config');

start();

async function start() {
    const app = express();

    expressConfig(app);
    await databaseConfig(app);
    routesConfig(app);

    app.get('/', (req, res) => {
        res.send('it\'s working');
    });

    app.listen(PORT, () => console.log(`Application started at http://localhost:${PORT}...`));
}