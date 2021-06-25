const Course = require('../models/Course');
const User = require('../models/User');

module.exports = {
    createCourse,
    getAllCourses,
    getCourseById,
    editCourse,
    enrollCourse,
    deleteCourse
};

async function createCourse(courseData) {
    const pattern = new RegExp(`^${courseData.title}$`, 'i');
    const existing = await Course.find({ title: { $regex: pattern } });

    if (existing) {
        throw new Error('A course with this name already exists!');
    }

    const course = await new Course(courseData);
    course.save();

    return course;    
}

async function getAllCourses(query) {
    return await Course.find({}).lean();
}

async function getCourseById(id) {
    return await Course.findById(id).populate('users').lean();    
}

async function editCourse(id, courseData) {
    return await Course.findByIdAndUpdate(id, courseData, { runValidators: true });    
}

async function enrollCourse(courseId, userId) {
    const course = await Course.findById(courseId);
    const user = await User.findById(userId);

    if (userId == course.author) {
        throw new Error('You cannot enroll your own course!');
    }

    course.users.push(userId);
    user.courses.push(courseId);

    return Promise.all([course.save(), user.save()]);
}

async function deleteCourse(id) {
    return await Course.findByIdAndRemove(id);
}