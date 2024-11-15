const router = require('express').Router();
const { isUser } = require('../middlewares/guards');
const movieService = require('../services/movie');

router.get('/', async (req, res) => {
    const movies = await movieService.getAllMovies();
    console.log('USER', req.user);
    res.render('home', { title: 'Catalog Page', movies });
});

router.get('/create', isUser(), async (req, res) => {
    res.render('create', { title: 'Create Page' });
});

router.post('/create', isUser(), async (req, res) => {
    console.log(req.body);

    const movieData = {
        title: req.body.title.trim(),
        genre: req.body.genre.trim(),
        director: req.body.director.trim(),
        year: Number(req.body.year.trim()),
        imageURL: req.body.imageURL.trim(),
        rating: Number(req.body.rating.trim()),
        description: req.body.description.trim(),
        creator: req.user._id
    };
    console.log('MOVIE TO BE SAVED', movieData);

    try {
        await movieService.addMovie(movieData);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create Page',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            movieData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/details/:id', isUser(), async (req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        // movie.isUser = req.user ? true : false;
        // movie.hasVoted = req.user && movie.votes.toString().includes(req.user._id);

        const isCreator = req.user._id ? movie.creator == req.user._id : false;
        console.log('CREATOR', isCreator);
        res.render('details', { title: 'Details Page', movie: { ...movie, stars: Array(movie.rating).fill(0) }, isCreator } );
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.get('/search', async (req, res) => {
    const movies = await movieService.getAllMovies();
    res.render('search', { title: 'Search Page', movies });
});

router.post('/search', async (req, res) => {
    const search = req.body.search.trim().toLowerCase();
    const genre = req.body.genre.trim().toLowerCase();
    const year = req.body.year.trim();
    
    const movies = await movieService.getAllMovies({ search, genre, year });
    res.render('search', { title: 'Search Page', movies, query: { search, genre, year } });    
});

router.get('/create/cast', isUser(), async (req, res) => {
    res.render('cast-create', { title: 'Create Page' });
});

router.post('/create/cast', isUser(), async (req, res) => {
    console.log(req.body);

    const castMemberData = {
        name: req.body.name.trim(),
        age: Number(req.body.age.trim()),
        born: req.body.born.trim(),
        character: req.body.character.trim(),
        imageURL: req.body.imageURL.trim()
    };

    try {
        await movieService.addCastMember(castMemberData);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create Page',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            castMemberData
        };
        console.log(ctx);

        res.render('cast-create', ctx);
    }
});

router.get('/attach-cast/:id', isUser(), async (req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        const castMembers = await movieService.getAllCastMembers();

        res.render('cast-attach', { title: 'Attach Cast Member Page', movie, castMembers });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.post('/attach-cast/:id', isUser(), async (req, res) => {
    const movie = await movieService.getMovieById(req.params.id);
    const castMembers = await movieService.getAllCastMembers();

    console.log('CAST ATTACH', req.body.cast);

    try {
        await movieService.attachCastMember(req.params.id, req.body.cast);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Create Page',
            error: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message
        };
        console.log(ctx);

        res.render('cast-attach', { title: 'Attach Cast Member Page', movie, castMembers });
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);
        res.render('edit', { title: 'Edit Page', movie });
    } catch (err) {
        console.log(err.message);

        res.redirect('/');
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const movieData = {
        title: req.body.title.trim(),
        genre: req.body.genre.trim(),
        director: req.body.director.trim(),
        year: Number(req.body.year.trim()),
        imageURL: req.body.imageURL.trim(),
        rating: Number(req.body.rating.trim()),
        description: req.body.description.trim()
    };

    try {
        const movie = await movieService.getMovieById(req.params.id);

        if (movie.creator !== req.user._id) {
            throw new Error('You cannot edit a movie you haven\'t created!');
        }

        await movieService.editMovie(req.params.id, movieData);
        res.redirect(`/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Edit Page',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message)[0] :
                err.message,
            movie: movieData
        };

        res.render('edit', ctx);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const movie = await movieService.getMovieById(req.params.id);

        console.log('IN DELETE', movie.creator === req.user._id);
        if (movie.creator !== req.user._id) {
            throw new Error('You cannot delete a record you haven\'t created');
        }

        await movieService.deleteMovie(req.params.id);
        res.redirect('/');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/details/${req.params.id}`);
    }
});

module.exports = router;