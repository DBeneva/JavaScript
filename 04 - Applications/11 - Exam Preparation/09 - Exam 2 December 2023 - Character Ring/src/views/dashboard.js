import { html } from '../../node_modules/lit-html/lit-html.js';
import { getAllPosts } from '../api/data.js';

const dashboardTemplate = (data) => html`
    ${data.length > 0
      ? html`<h2>Characters</h2>`
      : html`<h2>No added Heroes yet.</h2>`}
    
    <section id="characters">
    <!-- Display a div with information about every post (if any)-->
    
    ${data.map(characterTemplate)}
    </section>           
`;

const characterTemplate = (character) => html`
    <div class="character">
      <img src="${character.imageUrl}" alt="example1" />
      <div class="hero-info">
        <h3 class="category">${character.category}</h3>
        <p class="description">${character.description}</p>
        <a class="details-btn" href="/details/${character._id}">More Info</a>
      </div>      
    </div>
`;

export async function dashboardPage(ctx) {
  const data = await getAllPosts();

  ctx.setUserNav();
  ctx.render(dashboardTemplate(data));
}
