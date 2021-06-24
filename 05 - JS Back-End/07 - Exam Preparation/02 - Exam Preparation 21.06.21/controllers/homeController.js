const router = require('express').Router();

router.get('/', async (req, res) => {
    const plays = await req.storage.getAllPlays(req.query.orderedBy);

    res.render('home', { title: 'Theater', plays });
});

module.exports = router;