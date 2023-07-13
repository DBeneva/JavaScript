import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllEvents } from '../api/data.js';

const dashboardTemplate = (data) => html`
    <h2>Current Events</h2>
    <section id="dashboard">
        ${data.length > 0
          ? html`${data.map(eventTemplate)}`
          : html`<h4>No Events yet.</h4>`
        } 
    </section>    
`;

const eventTemplate = (event) => html`
    <div class="event">
        <img src="${event.imageUrl}" alt="example1" />
        <p class="title">
          ${event.name}
        </p>
        <p class="date">${event.date}</p>
        <a class="details-btn" href="${`/details/${event._id}`}">Details</a>
    </div>
`;

export async function dashboardPage(ctx) {
  const data = await getAllEvents();

  ctx.setUserNav();
  ctx.render(dashboardTemplate(data));
}