module.exports = {
    isUser,
    isGuest
};

function isUser() {
    return (req, res, next) => {
        if (req.user) {
            next();
        } else {
            res.redirect('/login');
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