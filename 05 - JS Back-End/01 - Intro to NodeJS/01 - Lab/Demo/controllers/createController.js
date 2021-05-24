const parseForm = require('../util/formParser');
const database = require('../util/database');

module.exports = async (req, res) => {
    const body = await parseForm(req);
    database.addItem(body);

    console.log('>>> Created item');

    res.writeHead(301, {
        'Location': '/catalog'
    });
    res.end();
};