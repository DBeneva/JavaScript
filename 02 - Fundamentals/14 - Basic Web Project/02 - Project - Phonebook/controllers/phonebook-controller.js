//const { removeContact } = require('../phonebook');
const phonebook = require('../phonebook');

module.exports = {
  index(req, res) {
    const contacts = phonebook.getAll();
    res.render('index', { contacts });
  },
  addPhonebookPost(req, res) {
    const name = req.body.name;
    const number = req.body.number;
    phonebook.addContact(name, number);
    
    res.redirect('/');
  },
  removePhonebookContact(req, res) {
    const name = req.body.name;
    phonebook.removeContact(name);

    res.redirect('/');
  }
};