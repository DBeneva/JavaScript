const Cube = require('../models/Cube');
const Comment = require('../models/Comment');

module.exports = {
    async createComment(cubeId, comment) {
        const cube = await Cube.findById(cubeId);
    
        if (!cube) {
            throw new ReferenceError('No such ID in database');
        }
    
        const newComment = new Comment(comment);
        await newComment.save();
        cube.comments.push(newComment);
        await cube.save();
    }
};