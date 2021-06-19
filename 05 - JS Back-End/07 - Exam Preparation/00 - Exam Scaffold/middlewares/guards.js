module.exports = () => (req, res, next) => {
    req.guards = {
        isUser,
        isGuest
    };

    next();
};

function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/auth/login');
        }
    };
}

function isGuest() {
    return (req, res, next) => {
        if (!req.user) {
            next();
        } else {
            res.redirect('/');
        }
    };
}