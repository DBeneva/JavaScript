const fs = require('fs');
const uniqid = require('uniqid');
const Contact = require('./models/Contact');

const contacts = JSON.parse(fs.readFileSync('./data/contacts.json', 'utf-8'));

function getAll() {
	return Object.entries(contacts).map(([id, v]) => Object.assign({}, { id }, v));
}

function getById(id) {
	const contact = contacts[id];

	if (contact) {
		return Object.assign(contact, { id });
	} else {
		return undefined;
	}
}

function addContact(name, surname, numbers, emails) {
	const id = uniqid();
	contacts[id] = new Contact(name, surname, numbers, emails);
	fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts, null, 2));
}

function editContact(id, name, surname, numbers, emails) {
	if (!contacts[id]) {
		throw new ReferenceError('No such ID in the database');
	}

	contacts[id] = new Contact(name, surname, numbers, emails);
	fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts, null, 2));
}

function removeContact(id) {
	if (!contacts[id]) {
		throw new ReferenceError('No such ID in the database');
	}

	delete contacts[id];
	fs.writeFileSync('./data/contacts.json', JSON.stringify(contacts, null, 2));
}

module.exports = {
	getAll,
	getById,
	addContact,
	editContact,
	removeContact
};
