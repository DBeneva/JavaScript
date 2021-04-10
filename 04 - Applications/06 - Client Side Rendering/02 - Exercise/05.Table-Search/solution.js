import { html, render } from './node_modules/lit-html/lit-html.js';

const rowTemplate = (student, select) => html`
<tr class=${select ? 'select' : ''}>
   <td>${student.firstName} ${student.lastName}</td>
   <td>${student.email}</td>
   <td>${student.course}</td>
</tr>`;

start();

async function start() {
   const input = document.getElementById('searchField');
   document.getElementById('searchBtn').addEventListener('click', () => update(students, input.value));
   
   const response = await fetch('http://localhost:3030/jsonstore/advanced/table');
   const data = await response.json();
   const students = Object.values(data);

   update(students);
}

function update(students, match = '') {
   const result = students.map(s => rowTemplate(s, compare(s, match))); 
   render(result, document.querySelector('tbody'));
}

function compare(item, match) {
   return Object.values(item).some(v => match && v.toLowerCase().includes(match.toLowerCase()));
}