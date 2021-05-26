const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Catalog Page');
});

app.listen(3000, () => console.log('Listening on port 3000...'));