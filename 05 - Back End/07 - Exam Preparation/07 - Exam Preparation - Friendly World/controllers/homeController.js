const router = require('express').Router();

router.get('/', async (req, res) => {
    const animals = await req.storage.getAllAnimals();
    const lastAnimals = animals.slice(-3);
    
    res.render('home', { title: 'Home Page', lastAnimals });
});

router.get('/*', async (req, res) => {
    res.render('404', { title: '404 Page' });
});

module.exports = router;