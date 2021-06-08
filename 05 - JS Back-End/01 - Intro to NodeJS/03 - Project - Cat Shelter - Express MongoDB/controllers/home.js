module.exports = {
    async home(req, res) {
        try {
            const cats = await req.storage.getAll(req.query.search);
            // console.log(cats);
            res.render('home', { cats });
        } catch (err) {
            console.error(err.message);
        }
    }
};