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

    if (req.user) {
        hotel.isUser = true;
    }

    if (hotel.isUser && (owner.username == req.user.username)) {
        hotel.isOwner = true;
    }

    if (req.user && hotel.bookedBy.includes(req.user.username)) {
        hotel.hasBooked = true;
    }

    res.render('details', { title: hotel.name, hotel });
});


router.get(
    '/edit/:id',
    (req, res, next) => req.guards.isUser(req, res, next),
    async (req, res) => {
        const hotel = await req.storage.getHotelById(req.params.id);

        res.render('edit', { title: `Edit ${hotel.name}`, hotel });
    });

router.post(
    '/edit/:id',
    (req, res, next) => req.guards.isUser(req, res, next),
    async (req, res) => {
        const hotelData = {
            name: req.body.name,
            city: req.body.city,
            rooms: req.body.rooms,
            imageUrl: req.body.imageUrl
        };

        const hotel = await req.storage.getHotelById(req.params.id);

        if (req.user._id == hotel.owner) {
            try {
                await req.storage.editHotel(req.params.id, hotelData);
                res.redirect(`/hotels/details/${req.params.id}`);
            } catch (err) {
                const ctx = {
                    title: `Edit ${hotel.name}`,
                    hotel,
                    errors: [err.message]
                };

                res.render('edit', ctx);
            }
        }
    });

router.get(
    '/book/:id',
    (req, res, next) => req.guards.isUser(req, res, next),
    async (req, res) => {
        const hotel = await req.storage.getHotelById(req.params.id);
        
        if (req.user._id != hotel.owner) {
            try {
                await req.storage.bookHotel(hotel._id, req.user._id);
                res.redirect(`/hotels/details/${hotel._id}`);
            } catch (err) {
                console.log(err.message);
            }
        }

        res.redirect(`/hotels/details/${hotel._id}`);
    });

router.get(
    '/delete/:id',
    (req, res, next) => req.guards.isUser(req, res, next),
    async (req, res) => {
        const hotel = await req.storage.getHotelById(req.params.id);

        if (req.user._id == hotel.owner) {
            try {
                confirm('about to delete hotel', hotel.name);
                await req.storage.deleteHotel(req.params.id);
            } catch (err) {
                console.log(err.message);
            }
        }

        res.redirect('/');
    });

module.exports = router;