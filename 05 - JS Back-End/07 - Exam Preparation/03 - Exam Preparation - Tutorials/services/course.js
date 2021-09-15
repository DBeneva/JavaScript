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
    const existing = await Course.findOne({ title: { $regex: pattern } });

    if (existing) {
        throw new Error('A course with this name already exists!');
    }

    const course = await new Course(courseData);
    return await course.save();    
}

async function getAllCourses(user, query) {
    const search = query ? { title: { $regex: query, $options: 'i' } } : {};
    const sort = user ? { createdAt: 1 } : { users: -1 };
    const limit = user ? '' : 3;
    
    return await Course.find(search).sort(sort).limit(limit).lean();
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

    course.users.push(userId);
    user.courses.push(courseId);

    return Promise.all([course.save(), user.save()]);
}

async function deleteCourse(id) {
    return await Course.findByIdAndRemove(id);
}