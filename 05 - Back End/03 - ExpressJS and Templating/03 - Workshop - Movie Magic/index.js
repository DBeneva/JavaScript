const express = require('express');
const expressConfig = require('./config/expressConfig');
// const databaseConfig = require('./config/database');
// const middlewaresConfig = require('./config/middlewares');
const routesConfig = require('./config/routes');

const app = express();
const port = 3000;

expressConfig(app);
routesConfig(app);

app.listen(port, () => console.log(`The app is running on port ${port}...`));