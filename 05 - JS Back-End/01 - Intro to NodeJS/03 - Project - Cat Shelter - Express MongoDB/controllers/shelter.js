module.exports = {
    async shelter(req, res) {
        const cat = await req.storage.getById(req.params.id);
        
        if (!cat) {
            res.redirect('/');
        } else  {
            res.render('shelter', cat);
        }        
    },
    async shelterPost(req, res) {
        try {
            await req.storage.shelter(req.params.id);
            res.redirect('/');
        } catch (err) {
            console.error(err.message);
        }
    }
};