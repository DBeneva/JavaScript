const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
const furnitureController = require('./controllers/furnitureController');
const usersController = require('./controllers/usersController');

start();

async function start() {
    await new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/furniture-rest', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        
        const db = mongoose.connection;
        
        db.on('error', (err) => reject(err));
        db.on('open', () => {
            console.log('Database connected');
            resolve();
        });
    });


    const app = express();
    
    app.use(express.json());
    app.use(cors());
    //app.use('/users', authController);
    app.use('/data/catalog', furnitureController);
    app.use('/users', usersController);
    
    app.get('/', (req, res) => res.send('It wor  ks!'));
    
    app.listen(5000, () => console.log('REST Service is listening on port 5000...'));
}