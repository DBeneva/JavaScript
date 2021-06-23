const router = require('express').Router();
const { parseError } = require('../util/parsers');

router.get(
    '/create',
    (req, res, next) => req.guards.isUser(req, res, next),
    (req, res) => {
        res.render('create', { title: 'Add a Play' });
    });

router.post(
    '/create',
    (req, res, next) => req.guards.isUser(req, res, next),
    async (req, res) => {
        const playData = {
            title: req.body.title,
            description: req.body.description,
            imageUrl: req.body.imageUrl,
            isPublic: Boolean(req.body.public),
            owner: req.user._id
        };

        try {

            await req.storage.createPlay(playData);
            res.redirect('/');
        } catch (err) {
            console.log(err.message);

            const ctx = {
                title: 'Add a Play',
                playData,
                errors: parseError(err)
            };

            res.render('create', ctx);
        }
    });

router.get(
    '/details/:id',
    async (req, res) => {
        try {
            const play = await req.storage.getPlayById(req.params.id);

            console.log(play.owner);
            if (req.user && play.owner == req.user._id) {
                play.isOwner = true;
            }
    
            if (req.user && play.usersLiked.includes(req.user)) {
                play.liked = true;
            }
    
            res.render('details', { title: 'Add a Play', play });
        } catch (err) {
            console.log(err.message);
            res.redirect('/404');
        }

    });

module.exports = router;