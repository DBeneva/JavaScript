// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const Cat = require('./models/Cat');
const Person = require('./models/Person');
const Post = require('./models/Post');
const Comment = require('./models/Comment');

start();

async function start() {
    const connectionStr = 'mongodb://localhost:27017/testdb';
    const client = await mongoose.connect(connectionStr, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    });

    console.log('Database connected');

    const post = await (await Post.findOne({})
        .populate('author')
        .populate({
            path: 'comments',
            populate: 'author'
        }));
    console.log(post);
    

    // await Person.findByIdAndUpdate('60b51858cb4e3530a0442383', { $set: { firstName: 'Matthew' } });
    // console.log(await Person.find({}));
}