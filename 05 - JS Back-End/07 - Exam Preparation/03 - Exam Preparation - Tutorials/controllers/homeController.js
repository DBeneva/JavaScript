const router = require('express').Router();

router.get('/', (req, res) => {
    res.render('home', { title: 'Tutorials' });
});

module.exports = router;