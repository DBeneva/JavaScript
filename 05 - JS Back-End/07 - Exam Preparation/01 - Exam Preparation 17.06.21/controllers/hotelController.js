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
    try {
        const hotel = await req.storage.getHotelById(req.params.id);
        hotel.isUser = Boolean(req.user);
        hotel.isOwner = req.user && hotel.owner == req.user._id;
        hotel.hasBooked = req.user && hotel.bookedBy.find(u => u._id == req.user._id);

        res.render('details', { title: hotel.name, hotel });
    } catch (err) {
        console.log(err.message);
        res.redirect('/404');
    }

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

        if (req.user._id != hotel.owner && !hotel.bookedBy.includes(req.user._id)) {
            try {
                await req.storage.bookHotel(hotel._id, req.user._id);
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
                await req.storage.deleteHotel(req.params.id);
            } catch (err) {
                console.log(err.message);
            }
        }

        res.redirect('/');
    });

module.exports = router;