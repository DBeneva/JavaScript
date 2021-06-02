module.exports = {
    createAccessory(req, res) {
        res.render('createAccessory', { title: 'Create Accessory' });
    },
    async post(req, res) {
        
        
        res.redirect('/');
    }
};