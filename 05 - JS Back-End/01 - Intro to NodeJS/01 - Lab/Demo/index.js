const http = require('http');
const router = require('./router'); // registerHandler(), get(), post(), delete(), match()

const aboutController = require('./controllers/aboutController'); // (req, res) => res.write(layout(html, 'About'))
const homeController = require('./controllers/homeController'); // (req, res) => res.write(layout(homePage))
const catalogController = require('./controllers/catalogController'); // (req, res) => res.write(layout(html(Object.entries(database.database)), 'Catalog'))
const createController = require('./controllers/createController'); // (req, res) => { form.parse(req, (err, fields, files) => { ... res.writeHead(301, { ... }; res.end(); }); }
const deleteController = require('./controllers/deleteController'); // (req, res) => { ... res.writeHead(301, { 'Location': '/catalog' }); res.end(); }
const uploadController = require('./controllers/uploadController');

router.get('/', homeController); // handlers['/'].GET = (req, res) => res.write(layout(homePage))
router.get('/catalog', catalogController); // handlers['/catalog'].GET = (req, res) => res.write(layout(html(Object.entries(database.database)), 'Catalog'))
router.get('/about', aboutController); // handlers['/about'].GET = (req, res) => res.write(layout(html, 'About'))
router.post('/create', createController); // handlers['/create'].POST = (req, res) => { form.parse(req, (err, fields, files) => { ... res.writeHead(301, { ... }; res.end(); }); }
router.get('/delete', deleteController); // handlers['/delete'].GET = (req, res) => { ... res.writeHead(301, { 'Location': '/catalog' }); res.end(); }
router.post('/upload', uploadController); // handlers['/upload'].POST = (req, res) => { form.parse(req, async (err, fields, files) => { ... res.writeHead(301, { ... }); res.end(); }); }

// start server
const port = 3000;
const server = http.createServer(requestHandler);

function requestHandler(req, res) {
    const url = new URL(req.url, 'http://localhost');
    console.log(url);

    console.log('>>>', req.method, req.url);
    const handler = router.match(req.method, url.pathname); // (req, res) => res.write(layout(homePage))
    handler(req, res);
}

server.listen(port, () => console.log('Server listening on port ', port));