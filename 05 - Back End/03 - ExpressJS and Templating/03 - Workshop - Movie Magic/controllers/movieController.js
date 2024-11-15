const router = require('express').Router();
const fs = require('fs');
const Movie = require('../models/Movie');

router.get('/', async (req, res) => {
    fs.readFile('./config/database.json', 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        
        const movies = JSON.parse(data);
        console.log(movies);
        res.render('home', { title: 'Catalog Page', movies });
    });
});

router.get('/create', async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', async (req, res) => {
    console.log(req.body);

    const movie = new Movie(
        req.body.title.trim(),
        req.body.genre.trim(),
        req.body.director.trim(),
        Number(req.body.year.trim()),
        req.body.imageURL.trim(),
        Number(req.body.rating.trim()),
        req.body.description.trim()
    );
    console.log('MOVIE TO BE SAVED', movie);

    fs.readFile('./config/database.json', 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            res.render('create', { title: 'Create Page', movie });
            return;
        }
        
        const movies = JSON.parse(data);
        const lastID = movies[movies.length - 1].id;
        movie.id = lastID + 1;
        movies.push(movie);

        console.log(movies);
        fs.writeFile('./config/database.json', JSON.stringify(movies, null, 2), (error) => {
            if (error) {
                console.log('An error has occurred ', error);
                res.render('create', { title: 'Create Page', movie });
                return;
            }
        
            console.log('Data written successfully to disk');
        });

        res.render('home', { title: 'Catalog Page', movies });
    });

});

router.get('/details/:id', async (req, res) => {
    fs.readFile('./config/database.json', 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        
        const movies = JSON.parse(data);
        console.log(movies);
        const movieID = req.params.id;
        const movie = movies.find(m => m.id == movieID);
    
        res.render('details', { title: 'Details Page', movie: { ...movie, stars: Array(movie.rating).fill(0) } });
    });
});

router.get('/search', async (req, res) => {
    fs.readFile('./config/database.json', 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        
        const searchResults = JSON.parse(data);
        res.render('search', { title: 'Search Page', searchResults });
    });
});

router.post('/search', async (req, res) => {
    fs.readFile('./config/database.json', 'utf8', (error, data) => {
        if (error) {
            console.log(error);
            return;
        }
        
        const movies = JSON.parse(data);
        const titleQuery = req.body.search.trim().toLowerCase();
        const genreQuery = req.body.genre.trim().toLowerCase();
        const yearQuery = req.body.year.trim();

        const searchResults = movies.filter(m => (m.title.toLowerCase().includes(titleQuery) && m.genre.toLowerCase().includes(genreQuery) && m.year.toString().includes(yearQuery)));

        console.log(movies[0].title.toLowerCase().includes(titleQuery));
        console.log(movies[0].genre.toLowerCase().includes(genreQuery));
        console.log(movies[0].year.toString().includes(yearQuery));
        
        console.log(searchResults);
        res.render('search', { title: 'Search Page', searchResults, titleQuery, genreQuery, yearQuery });
    });
    
});

module.exports = router;