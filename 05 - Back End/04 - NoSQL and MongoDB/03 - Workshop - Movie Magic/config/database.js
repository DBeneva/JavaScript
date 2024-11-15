const mongoose = require('mongoose');
const DB_CONNECTION_STRING = 'mongodb+srv://DBeneva:1qaz%40WSX@cluster0.asdxapn.mongodb.net/movie-magic';

module.exports = (app) => {
    return new Promise((resolve, reject) => {
        mongoose.connect(DB_CONNECTION_STRING, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
        });

        mongoose.set('strictQuery', false);

        const db = mongoose.connection;

        db.on('error', err => {
            console.error('Database error:', err.message);
            reject(err.message);
        });

        db.on('open', () => {
            console.log('Database connected');
            resolve();
        });
    });
};