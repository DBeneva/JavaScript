const phonebookController = require('./controllers/phonebook-controller');

module.exports = (app) => {
  app.get('/', phonebookController.index);
  app.post('/add', phonebookController.addPhonebookPost),
  app.delete('/add', phonebookController.removePhonebookContact);
};