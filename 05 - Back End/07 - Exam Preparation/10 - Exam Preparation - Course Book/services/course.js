const Course = require('../models/Course');
const User = require('../models/User');

module.exports = {
    addRecord,
    getAllRecords,
    getRecordById,
    editRecord,
    signUpForCourse,
    deleteRecord
};

async function addRecord(recordData, userData) {
    const course = await new Course({ ...recordData, ownerEmail: userData.email });
    const user = await User.findById(userData._id);
    user.courses = user.courses ? [...user.courses, course._id.toString()] : [course._id.toString()];

    return Promise.all([course.save(), user.save()]);
}

async function getAllRecords(query) {
    const search = query
        ? { location: { $regex: query.search || /.*/, $options: 'i' } }
        : {};

    const courses = await Course.find(search).lean();
    return courses;
}

async function getRecordById(id) {
    return await Course.findById(id).populate('owner').lean();
}

async function editRecord(id, recordData) {
    return await Course.findByIdAndUpdate(id, recordData, { runValidators: true });    
}

async function signUpForCourse(courseID, userID) {
    const course = await Course.findById(courseID);
    course.signUpList.push(userID);

    const user = await User.findById(userID);
    course.signedUpUsernames += course.signedUpUsernames ? `, ${user.username}` : user.username;
    user.signedUpFor.push(course._id);

    return Promise.all([course.save(), user.save()]);
}

async function deleteRecord(id) {
    return await Course.findByIdAndRemove(id);
}