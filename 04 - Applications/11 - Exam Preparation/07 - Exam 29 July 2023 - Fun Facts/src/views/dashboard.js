import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFacts } from '../api/data.js';

const dashboardTemplate = (data) => html`
    <h2>Fun Facts</h2>
    <section id="dashboard">
      <!-- Display a div with information about every post (if any)-->
      ${data.length > 0
        ? html`${data.map(funFactTemplate)}`
        : html`<h2>No Fun Facts yet.</h2>`
      }
    </section>           
`;

const funFactTemplate = (fact) => html`
    <div class="fact">
        <img src="${fact.imageUrl}" alt="example1" />
        <h3 class="category">${fact.category}</h3>
        <p class="description">${fact.description}</p>
        <a class="details-btn" href="${`/details/${fact._id}`}">More Info</a>
    </div>
`;

export async function dashboardPage(ctx) {
  const data = await getAllFacts();

  ctx.setUserNav();
  ctx.render(dashboardTemplate(data));
}


{/* 
<h2>Current Events</h2>
    <section id="dashboard">
        
    </section>  */}