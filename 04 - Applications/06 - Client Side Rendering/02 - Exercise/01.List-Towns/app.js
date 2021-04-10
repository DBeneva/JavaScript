import { html, render } from './node_modules/lit-html/lit-html.js';

const listTemplate = (towns) => html`
    <ul>
        ${towns.map(t => html`<li>${t}</li>`)}
    </ul>`;

document.getElementById('btnLoadTowns').addEventListener('click', updateList);

function updateList(ev) {
    ev.preventDefault();

    const input = document.getElementById('towns').value;
    const towns = input.split(',').map(x => x.trim());

    render(listTemplate(towns), document.getElementById('root'));
}