import { html, render } from './node_modules/lit-html/lit-html.js';
import { towns } from './towns.js';

const searchTemplate = (towns, match) => html`
   <article>
      <div id="towns">
         <ul>
            ${towns.map(t => itemTemplate(t, match))}
         </ul>
      </div>
      <input type="text" id="searchText" .value=${match} />
      <button @click=${search}>Search</button>
      <div id="result">${countMatches(match)} found</div>
   </article>`;

const itemTemplate = (town, match) => html`
   <li class=${(match && town.toLowerCase().includes(match.toLowerCase())) ? 'active' : ''}>${town}</li>`;

const body = document.body;
update();

function update(match = '') {
   render(searchTemplate(towns, match), body);
}

function search(ev) {
   const match = ev.target.parentNode.querySelector('input').value;
   update(match);
}

function countMatches(match) {
   const matches = towns.filter(t => (match && t.toLowerCase().includes(match.toLowerCase()))).length;
   const matchOrMatches = matches == 1 ? 'match' : 'matches';
   return `${matches} ${matchOrMatches}`;
}