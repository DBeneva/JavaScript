const homeHandler = require('./home');
const staticFiles = require('./static-files');
const catHandler = require('./cat');
const search = require('./search');

module.exports = [homeHandler, staticFiles, catHandler, search];