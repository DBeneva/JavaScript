const router = require('express').Router();
const fs = require('fs').promises;
const books = require('../data/books.json');

router.get('/', (req, res) => {
    const ctx = {
        books: req.storage.getAll()
    };

    res.render('catalog', ctx);
});

router.get('/create', (req, res) => {
    res.render('create');
});

router.post('/create', async (req, res) => {
    console.log(req.body);
    console.log(books);

    try {
        const title = req.body.title;
        const author = req.body.author;
        
        if (req.body.title == '' || req.body.author == '') {
            throw new Error('All fields are required');
        }

        const booksModified = Object.assign(books, { [getRandomId()]: { title, author } });
        const json = JSON.stringify(booksModified, null, 2);
        
        await fs.writeFile('./data/books.json', json);
    
        res.redirect('/catalog');
        
        function getRandomId() {
            const ids = Object.keys(books);
            const lastId = ids[Object.keys(books).length - 1];
            let newId = lastId;
    
            while (ids.includes(newId)) {
                newId = ('00000000' + (Math.random() * 99999999 | 0)).toString(16).slice(-8);
            }
    
            return newId;
        }
    } catch (err) {
        throw err;
    }
    
});

module.exports = router;