import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecordsBySearchQuery } from '../api/data.js';

const searchTemplate = (onSubmit, data) => html`
    <section id="search">
      <div class="form">
        <h4>Search</h4>
        <form class="search-form" @submit=${onSubmit}>
          <input type="text" name="search" id="search-input" />
          <button class="button-list">Search</button>
        </form>
      </div>
      <div class="search-result">
        ${data.length > 0
            ? html`${data.map(carTemplate)}`
            : html`<h2 class="no-avaliable">No result.</h2>`
        }
      </div>
    </section>
`;

const carTemplate = (car) => html`
    <div class="car">
      <img src="${car.imageUrl}" alt="example1" />
      <h3 class="model">${car.model}</h3>
      <a class="details-btn" href="/cars/${car._id}">More Info</a>
    </div>
`;

export async function searchPage(ctx) {
  ctx.render(searchTemplate(onSubmit, []));

  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const search = formData.get('search');

    if (search == '') {
      return alert('Please fill in the search field!')
    }

    const searchResults = await getRecordsBySearchQuery(search);

    ctx.render(searchTemplate(onSubmit, searchResults));
  }
}
