const { removeContact } = require('../phonebook');
const phonebook = require('../phonebook');

module.exports = {
  index: (req, res) => {
    let contacts = phonebook.getAll();
    res.render('index', { contacts });
  },
  addPhonebookPost:(req, res) => {
    let name = req.body.name;
    let number = req.body.number;
    phonebook.addContact(name, number);
    
    res.redirect('/');
  }
}