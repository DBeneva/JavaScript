const router = require('express').Router();

router.get('/', async (req, res) => {
    const cosmetics = await req.storage.getAllRecords();
    const mostRecentCosmetics = cosmetics.slice(-3);

    res.render('home', { title: 'GlowAlchemy', mostRecentCosmetics });
});

router.get('/*', async (req, res) => {
    res.render('404', { title: 'Page Not Found - GlowAlchemy' });
});

module.exports = router;