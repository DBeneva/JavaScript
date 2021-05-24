const { loadTemplate } = require('../util/template');
const layout = require('../views/layout');


module.exports = async (req, res) => {
    const homePage = await loadTemplate('home');
    res.write(layout(homePage));
    res.end();
};