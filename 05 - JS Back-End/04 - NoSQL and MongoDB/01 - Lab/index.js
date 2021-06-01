// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const Cat = require('./models/Cat');
const Person = require('./models/Person');

start();

async function start() {
    const connectionStr = 'mongodb://localhost:27017/testdb';
    await mongoose.connect(connectionStr, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Database connected');

    console.log(await Cat.countDocuments({}));

    // await Person.findByIdAndUpdate('60b51858cb4e3530a0442383', { $set: { firstName: 'Matthew' } });
    // console.log(await Person.find({}));
}