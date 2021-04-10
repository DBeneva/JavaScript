
import { html, render } from './node_modules/lit-html/lit-html.js';

const selectTemplate = (list) => html`
<select id="menu">
    ${list.map(x => html`<option value=${x._id}>${x.text}</option>`)}
</select>`;

const endpoint = 'http://localhost:3030/jsonstore/advanced/dropdown';
const div = document.querySelector('div');
const input = document.getElementById('itemText').value;
let list = [];
initialize();

async function initialize() {
    document.querySelector('form').addEventListener('submit', (ev) => addItem(ev, list));

    const response = await fetch(endpoint);

    // if (response.ok != true) {
    //     const error = await response.json();
    //     return alert(error.message);
    // }

    const data = await response.json();
    list = Object.values(data);

    update(list);
}

function update(list) {
    render(selectTemplate(list), div);
}

async function addItem(ev, list) {
    ev.preventDefault();

    if (input != '') {
        const response = await fetch(endpoint, {
            method: 'post',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: input })
        });

        // if (response.ok != true) {
        //     const error = await response.json();
        //     return alert(error.message);
        // }

        const data = await response.json();
        list.push(data);
        update(list);
    }
}