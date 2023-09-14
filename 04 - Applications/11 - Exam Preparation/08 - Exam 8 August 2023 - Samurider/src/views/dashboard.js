import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllPosts } from '../api/data.js';

const dashboardTemplate = (data) => html`
    ${data.length > 0
      ? html`<h2>Available Motorcycles</h2>`
      : html`<h2 class="no-avaliable">No avaliable motorcycles yet.</h2>`}
    
    <section id="dashboard">
    <!-- Display a div with information about every post (if any)-->
    
    ${data.map(motorcycleTemplate)}
</section>           
`;

const motorcycleTemplate = (motorcycle) => html`
<div class="motorcycle">
    <img src="${motorcycle.imageUrl}" alt="example1" />
    <h3 class="model">${motorcycle.model}</h3>
    <p class="year">Year: ${motorcycle.year}</p>
    <p class="milage">Milage: ${motorcycle.milage} km.</p>
    <p class="contact">Contact Number: ${motorcycle.contact}</p>
    <a class="details-btn" href="/details/${motorcycle._id}">More Info</a>
</div>
`;

export async function dashboardPage(ctx) {
  const data = await getAllPosts();

  ctx.setUserNav();
  ctx.render(dashboardTemplate(data));
}

{/* <div class="motorcycle">
    <img src="./images/Yamaha mt 07.png" alt="example1" />
    <h3 class="model">Yamaha mt 07</h3>
    <p class="year">Year: 2017</p>
    <p class="milage">Milage: 15000 km.</p>
    <p class="contact">Contact Number: 0886714523</p>
    <a class="details-btn" href="#">More Info</a>
</div> */}