const router = require('express').Router();

const data = {
    'a1': {
        name: 'first'
    },
    'a2': {
        name: 'second'
    },
    'a3': {
        name: 'third'
    },
};

router.get('/', (req, res) => {
    res.json(data);
});

router.post('/', (req, res) => {
    console.log(req.body);
    res.end();
});

router.get('/:id', (req, res) => {
    res.json(data[req.params.id]);
});

router.put('/:id', (req, res) => {
    req.json(data[req.params.id]);
});

router.delete('/:id', (req, res) => {
    console.log(req.body);
    res.end();
});

module.exports = router;