const express = require('express');
const expressConfig = require('./config/expressConfig');
const databaseConnection = require('./config/database');
// const middlewaresConfig = require('./config/middlewares');
const routesConfig = require('./config/routes');
const auth = require('./middlewares/auth');
const port = 3000;

start();

async function start() {
    const app = express();
    
    expressConfig(app);
    await databaseConnection(app);
    app.use(auth());
    routesConfig(app);
    
    app.listen(port, () => console.log(`The app is running on port ${port}...`));
}