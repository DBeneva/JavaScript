const fs = require('fs');
const Contact = require('./models/Contact');

const contacts = JSON.parse(fs.readFileSync('./data/contacts.json', 'utf-8'));

function getAll() {
	return contacts.slice();
}

function addContact(name, number) {
	contacts.push(new Contact(name, number));
	fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts, null, 2));
}

function removeContact(name) {
	contacts.splice(contacts.indexOf(contacts.find(x => x.name == name)), 1);
	console.log(`Deleting phonebook contact of ${name}`);
	fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts, null, 2));
}

module.exports = {
	getAll,
	addContact,
	removeContact
};