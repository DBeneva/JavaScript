module.exports = (req, res) => {
    res.writeHead(301, {
        'Location': '/catalog'
    });
    
};