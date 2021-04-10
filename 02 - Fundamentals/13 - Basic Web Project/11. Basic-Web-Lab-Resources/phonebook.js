let Contact = require('./models/Contact');
let contacts = [
	{
		name: 'Peter',
		number: '+359885688748'
	},
	{
		name: 'John',
		number: '+359885558758'
	},
	{
		name: 'Mary',
		number: '+359866566758'
	}
];

function getAll() {
	return contacts.slice();
}

function addContact(name, number) {
	let contact = new Contact(name, number);
	contacts.push(contact);
}

module.exports = {
	getAll,
	addContact
};