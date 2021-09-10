const phonebookController = require('./controllers/phonebook-controller');

module.exports = (app) => {
  app.get('/', phonebookController.index);
  app.post('/add', phonebookController.addContact),
  app.get('/edit/:name', phonebookController.editContact),
  app.post('/edit/:name', phonebookController.editContactPost),
  app.get('/delete', phonebookController.removeContact);
};