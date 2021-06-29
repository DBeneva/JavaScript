const express = require('express');
const dataController = require('./dataController');

const app = express();

app.use((req, res, next) => {
    res.setHeader('Access-Controll-Allow-Origin', '*');
    res.setHeader('Access-Controll-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type');

    next();
});
app.use(express.json()); // body parser - json
app.use('/api', dataController);

app.get('/', (req, res) => {
    res.send('REST Service operational. Send request to /api');
});

app.listen(5000, () => console.log('Server listening on port 5000...'));