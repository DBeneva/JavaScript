const phonebookController = require('./controllers/phonebook-controller');

module.exports = (app) => {
  app.get('/', phonebookController.index);
  app.post('/add', phonebookController.addContact),
  app.get('/edit/:id', phonebookController.editContact),
  app.post('/edit/:id', phonebookController.editContactPost),
  app.get('/delete/:id', phonebookController.removeContact);
};