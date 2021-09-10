const phonebook = require('../phonebook');

module.exports = {
  index(req, res) {
    const contacts = phonebook.getAll();
    res.render('index', { contacts });
  },
  addContact(req, res) {
    const name = req.body.name;
    const number = req.body.number;

    if (name != '' && number != '') {
      phonebook.addContact(name, number);
    }
    
    res.redirect('/');
  },
  editContact(req, res) {
    const contact = phonebook.getAll().find(c => c.name == req.params.name);
    res.render('edit', contact);
  },
  editContactPost(req, res) {
    const name = req.body.name;
    const number = req.body.number;
    phonebook.editContact(name, number);
    
    res.redirect('/');
  },
  removeContact(req, res) {
    const name = req.body.name;
    phonebook.removeContact(name);

    res.redirect('/');
  }
};