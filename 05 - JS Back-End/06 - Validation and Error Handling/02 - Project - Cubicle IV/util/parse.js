function parseMongooseError(error) {
    return Object.values(error.errors).map(e => e.message);
}

module.exports = {
    parseMongooseError
};