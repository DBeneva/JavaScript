const router = require('express').Router();
const { isUser } = require('../middlewares/guards');

router.get('/', async (req, res) => {
    try {
        const trips = await req.storage.getAllTrips();
        // trips.map(c => Object.assign(c, { user: req.user }));
        // trips.map(c => c.createdAt =
        //     `${c.createdAt.toDateString()} \
        //     ${c.createdAt.getHours().toString().padStart(2, '0')}:${(c.createdAt.getMinutes()).toString().padStart(2, '0')}:${c.createdAt.getSeconds().toString().padStart(2, '0')}`);
        
        res.render('trips', { title: 'Shared Trips', trips });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

router.get('/create', isUser(), (req, res) => {
    res.render('create', { title: 'Offer Trip' });
});

router.post('/create', isUser(), async (req, res) => {
    const tripData = {
        start: req.body.start.trim(),
        end: req.body.end.trim(),
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage.trim(),
        carBrand: req.body.carBrand.trim(),
        seats: req.body.seats.trim(),
        price: Number(req.body.price.trim()),
        description: req.body.description.trim(),
        creator: req.user._id
    };
    console.log(tripData);

    try {
        await req.storage.createTrip(tripData, req.user._id);
        res.redirect('/trips');
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Offer Trip',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            tripData
        };
        console.log(ctx);

        res.render('create', ctx);
    }
});

router.get('/details/:id', async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);
        trip.isCreator = req.user ? trip.creator._id == req.user._id : false;
        trip.hasJoined = req.user ? trip.buddies.some(b => b._id == req.user._id) : false;
        trip.available = trip.seats > 0;
        trip.buddiesToString = trip.buddies.map(b => b.email).join(', ');
        console.log(trip);

        res.render('details', { title: 'Trip Details', trip });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }
});

router.get('/edit/:id', isUser(), async (req, res) => {
    try {
        const tripData = await req.storage.getTripById(req.params.id);

        if (tripData.creator._id != req.user._id) {
            throw new Error('You cannot edit a trip you haven\'t created');
        }

        res.render('edit', { title: 'Edit Trip', tripData });
    } catch (err) {
        console.log(err.message);
        res.redirect('/');
    }
});

router.post('/edit/:id', isUser(), async (req, res) => {
    const tripData = {
        _id: req.params.id,
        start: req.body.start.trim(),
        end: req.body.end.trim(),
        date: req.body.date,
        time: req.body.time,
        carImage: req.body.carImage.trim(),
        carBrand: req.body.carBrand.trim(),
        seats: req.body.seats.trim(),
        price: req.body.price.trim(),
        description: req.body.description.trim()
    };

    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (trip.creator._id != req.user._id) {
            throw new Error('You cannot edit a trip you haven\'t created');
        }

        await req.storage.editTrip(req.params.id, tripData);
        res.redirect(`/trips/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);

        const ctx = {
            title: 'Edit Trip',
            errors: err.name == 'ValidationError' ?
                Object.values(err.errors).map(e => e.properties.message) :
                [err.message],
            tripData
        };

        res.render('edit', ctx);
    }
});

router.get('/join/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (req.user._id == trip.creator._id || trip.buddies.some(u => u._id == req.user._id)) {
            const err = req.user._id == trip.creator._id ?
                new Error('You cannot join your own trip!') :
                new Error('You have already joined this trip');

            throw err;
        }

        await req.storage.joinTrip(req.params.id, req.user._id);
        res.redirect(`/trips/details/${req.params.id}`);
    } catch (err) {
        console.log(err.message);
        res.redirect(`/trips/details/${req.params.id}`);
    }
});

router.get('/delete/:id', isUser(), async (req, res) => {
    try {
        const trip = await req.storage.getTripById(req.params.id);

        if (trip.creator._id != req.user._id) {
            throw new Error('You cannot delete a trip you haven\'t created');
        }

        await req.storage.deleteTrip(req.params.id);
        res.redirect('/trips');
    } catch (err) {
        console.log(err.message);
        res.redirect(`/trips/details/${req.params.id}`);
    }
});

module.exports = router;