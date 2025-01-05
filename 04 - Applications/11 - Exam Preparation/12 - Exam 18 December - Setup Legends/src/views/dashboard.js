import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllRecords } from '../api/data.js';

const dashboardTemplate = (data) => html`
    <h2>Setup Showcase</h2>
    <section id="setups">
        <!-- Display a div with information about every post (if any)-->
        ${data.length > 0
            ? html`${data.map(setupTemplate)}`
            : html`<h2 id="no-setup">No Setups Added.</h2>`}
    </section>
`;

const setupTemplate = (setup) => html`
    <div class="setup">
        <img src="${setup.imageUrl}" alt="example1" />
        <div class="setup-info">
          <h3 class="setup-name">${setup.name}</h3>
          <p class="description">${setup.description}</p>
          <a class="details-btn" href="/setups/${setup._id}">Details</a>
        </div>
    </div>
`;

export async function dashboardPage(ctx) {
    try {
        const data = await getAllRecords();

        ctx.setUserNav();
        ctx.render(dashboardTemplate(data));
    } catch (err) {
        document.getElementById('errorBox').style.display = 'inline-block';
        //   setTimeout(() => {
        //     document.getElementById('errorBox').style.display = 'none';
        //   }, 3000);
    }
}
