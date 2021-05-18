const layout = require('../views/layout');

const html = `
    <div>
        <h1>My Page</h1>
        <p>Welcome to my page</p>
    </div>`;

module.exports = (req, res) => {
    res.write(layout(html));
    res.end();
};