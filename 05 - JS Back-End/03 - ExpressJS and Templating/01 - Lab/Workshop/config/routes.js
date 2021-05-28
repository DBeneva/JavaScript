// TODO: Require Controllers...
const home = require("../controllers/home");

module.exports = (app) => {
    app.get('/', home);
};