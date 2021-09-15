module.exports = () => (req, res, next) => {
    req.isAuth = isAuth;
    req.isGuest = isGuest;
    req.isOwner = isOwner;

    next();

    function isAuth(req, res, next) {
        if (req.user != undefined) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }

    function isGuest(req, res, next) {
        if (req.user == undefined) {
            next();
        } else {
            res.redirect('/products');
        }
    }

    function isOwner(req, res, next) {
        if (req.data && req.data.cube && req.user && (req.data.cube.authorId == req.user._id)) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    }
}
