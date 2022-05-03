module.exports = (req, res, next) => {
    if (req.headers.hasOwnProperty('x-admin')) {
        next();
    } else {
        res.status(401).send('Admins only. Please sign in.');
    }
};