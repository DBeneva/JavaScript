const html = `
<html>
    <body>
        <div>
            <h1>About Us</h1>
            <p>About page</p>
        </div>
    </body>
</html>`;

module.exports = (req, res) => {
    res.write(html);
    res.end();
};