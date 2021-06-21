const router = require('express').Router();

router.get(
    '/create',
    (req, res, next) => req.guards.isUser(req, res, next),
    (req, res) => {
        res.render('create', { title: 'Add Hotel' });
    });

router.post(
    '/create',
    (req, res, next) => req.guards.isUser(req, res, next),
    async (req, res) => {
        const hotel = {
            name: req.body.name,
            city: req.body.city,
            rooms: req.body.rooms,
            imageUrl: req.body.imageUrl,
            bookedBy: [],
            owner: req.user._id
        };

        try {
            await req.storage.createHotel(hotel);
            res.redirect('/');
        } catch (err) {
            const errors = err.errors ? Object.values(err.errors).map(e => e.properties.message) : [err.message];

            const ctx = {
                errors,
                hotel: {
                    name: req.body.name,
                    city: req.body.city,
                    rooms: req.body.rooms,
                    imageUrl: req.body.imageUrl
                }
            };

            res.render('create', ctx);
        }

    });

router.get('/details/:id', async (req, res) => {
    const hotel = await req.storage.getHotelById(req.params.id);
    const owner = await req.storage.getUserById(hotel.owner);
    
    if (req.user && (owner.username == req.user.username)) {
        hotel.isOwner = true;
    }

    res.render('details', { title: hotel.name, hotel });
});

module.exports = router;