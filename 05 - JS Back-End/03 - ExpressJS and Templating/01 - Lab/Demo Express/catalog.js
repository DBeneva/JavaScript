const router = require('express').Router();
const data = { name: 'Peter', age: 23 };

router.get('/catalog', (req, res) => {
    res.send('Catalog Page');
});

router.post('/catalog', (req, res) => {
    res.json(data);
});

module.exports = router;