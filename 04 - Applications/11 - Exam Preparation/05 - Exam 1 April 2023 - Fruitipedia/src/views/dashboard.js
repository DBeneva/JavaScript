import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllFruits } from '../api/data.js';

const dashboardTemplate = (data) => html`
    <h2>Fruits</h2>
    <section id="dashboard">
        ${data.length > 0
          ? html`${data.map(fruitTemplate)}`
          : html`<h2>No fruit info yet.</h2>`
        }
    </section>
`;

const fruitTemplate = (fruit) => html`
    <div class="fruit">
      <img src="${fruit.imageUrl}" alt="example1" />
      <h3 class="title">${fruit.name}</h3>
      <p class="description">${fruit.description}</p>
      <a class="details-btn" href="${`/details/${fruit._id}`}">More Info</a>
    </div>
`;

export async function dashboardPage(ctx) {
    const data = await getAllFruits();

    ctx.setUserNav();
    ctx.render(dashboardTemplate(data));
}


{/* <div class="fruit">
<img src="./images/fruit 2.png" alt="example1" />
<h3 class="title"> Kiwi</h3>
<p>Kiwifruit (often shortened to kiwi in North American, British and continental European English)
   or Chinese gooseberry is the edible berry of several species of woody vines.
   The most common cultivar group of kiwifruit is oval,
    about the size of a large hen's egg. It has a thin, fuzzy, fibrous, tart but edible light brown skin
     and light green or golden flesh with rows of tiny, black, edible seeds. The fruit has a soft
      texture with a sweet and unique flavour.</p>
<a class="details-btn" href="">More Info</a>
</div>
  <div class="fruit">
    <img src="./images/fruit 3.png" alt="example1" />
    <h3 class="title">Banana</h3>
    <p>A banana is an elongated, edible fruit – botanically a berry, produced by several kinds
       of large herbaceous flowering plants in the genus Musa.The fruit is variable
        in size, color, and firmness, but is usually elongated and curved, with soft flesh rich in starch
         covered with a rind, which may be green, yellow, red, purple, or brown when ripe. The fruits grow
          upward in clusters near the top of the plant.</p>
    <a class="details-btn" href="">More Info</a>
  </div> */}