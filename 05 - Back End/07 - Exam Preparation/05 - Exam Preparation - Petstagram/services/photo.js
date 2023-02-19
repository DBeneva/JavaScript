const Photo = require('../models/Photo');
const User = require('../models/User');

module.exports = {
    createPhoto,
    getAllPhotos,
    getPhotoById,
    editPhoto,
    commentPhoto,
    deletePhoto
};

async function createPhoto(photoData, userData) {
    const photo = await new Photo(photoData);
    const user = await User.findById(userData._id);
    user.photos = user.photos ? [...user.photos, photo._id.toString()] : [photo._id.toString()];

    return Promise.all([photo.save(), user.save()]);
}

async function getAllPhotos() {
    return await Photo.find().lean();
}

async function getPhotoById(id) {
    return await Photo.findById(id).lean();
}

async function editPhoto(id, photoData) {
    return await Photo.findByIdAndUpdate(id, photoData, { runValidators: true });    
}

async function commentPhoto(photoID, userID, comment) {
    const photo = await Photo.findById(photoID);
    photo.commentList.push({ userID, comment });

    return photo.save();
}

async function deletePhoto (id) {
    return await Photo.findByIdAndRemove(id);
}