const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

// router.get('/:id', isUser(), async (req, res) => {
//     const user = await req.storage.getUserById(req.user._id);
//     const courses = user.courses;

//     console.log('courses', courses.map(c => c.title).join('\n'));
//     console.log('signed up for:', user.signedUpFor.map(c => c.title).join('\n'));
//     res.render('profile', { title: 'My Profile', user });
// });

module.exports = router;