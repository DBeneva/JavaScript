const router = require('express').Router();
//const { isAuth } = require('../middlewares/guards');

router.post('/:cubeId/create',
    (req, res, next) => req.isAuth(req, res, next),
    async (req, res) => {
        try {
            const authorId = req.user._id;
            const cubeId = req.params.cubeId;
            const comment = {
                author: authorId,
                content: req.body.content
            };

            await req.storage.createComment(cubeId, comment);
            res.redirect(`/products/details/${cubeId}`);
        } catch (err) {
            console.error(err.message);
        }
    });

module.exports = router;