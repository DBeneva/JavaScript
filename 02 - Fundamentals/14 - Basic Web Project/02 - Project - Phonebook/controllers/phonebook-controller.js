const phonebook = require('../phonebook');

module.exports = {
  index(req, res) {
    const contacts = phonebook.getAll();
    res.render('index', { contacts });
  },
  addContact(req, res) {
    const name = req.body.name;
    const surname = req.body.surname;
    const numbers = req.body.numbers.split(', ');
    const emails = req.body.emails.split(', ');

    if (name != '' && numbers != []) {
      phonebook.addContact(name, surname, numbers, emails);
    }
    
    res.redirect('/');
  },
  editContact(req, res) {
    const contact = phonebook.getById(req.params.id);
    res.render('edit', contact);
  },
  editContactPost(req, res) {
    const name = req.body.name;
    const surname = req.body.surname;
    const numbers = req.body.numbers.split(', ');
    const emails = req.body.emails.split(', ');
    phonebook.editContact(req.params.id, name, surname, numbers, emails);
    
    res.redirect('/');
  },
  removeContact(req, res) {
    const id = req.params.id;
    phonebook.removeContact(id);

    res.redirect('/');
  }
};