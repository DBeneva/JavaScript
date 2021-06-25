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

});

router.post('/', (req, res) => {
    
});

router.get('/:id', (req, res) => {
    
});

router.put('/:id', (req, res) => {
    req.json(data[req.params.id]);
});

router.delete('/:id', (req, res) => {
    
});

module.exports = router;