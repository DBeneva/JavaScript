import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllRecords } from '../api/data.js';

const dashboardTemplate = (data) => html`
    <h3 class="heading">Marketplace</h3>
    <section id="dashboard">
        <!-- Display a div with information about every post (if any)-->
        ${data.length > 0
            ? html`${data.map(droneTemplate)}`
            : html`<h3 class="no-drones">No Drones Available</h3>`}
    </section>
`;

const droneTemplate = (drone) => html`
    <div class="drone">
        <img src="${drone.imageUrl}" alt="example1" />
        <h3 class="model">${drone.model}</h3>
        <div class="drone-info">
            <p class="price">Price: €${drone.price}</p>
            <p class="condition">Condition: ${drone.condition}</p>
            <p class="weight">Weight: ${drone.weight}g</p>
        </div>
        <a class="details-btn" href="/drones/${drone._id}">Details</a>
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
