import { html } from '../../node_modules/lit-html/lit-html.js';
import { getPostsBySearch } from '../api/data.js';

const searchTemplate = (onSubmit, searchResults) => html`
<section id="search">
  <div class="form">
    <h4>Search</h4>
    <form class="search-form" @submit=${onSubmit}>
      <input
        type="text"
        name="search"
        id="search-input"
      />
      <button class="button-list">Search</button>
    </form>
  </div>
  <h4 id="result-heading">Results:</h4>
  <div class="search-result">
    ${searchResults
        ? searchResults.length > 0
            ? searchResults.map(previewTemplate)
            : html`<h2 class="no-avaliable">No result.</h2>`
        : ''
    }
  </div>
</section>  
`;

const previewTemplate = (motorcycle) => html`
  <div class="motorcycle">
    <img src="${motorcycle.imageUrl}" alt="example1" />
    <h3 class="model">${motorcycle.model}</h3>
    <a class="details-btn" href="/details/${motorcycle._id}">More Info</a>
  </div>
`;

export async function searchPage(ctx) {
    ctx.render(searchTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const search = formData.get('search');

        if (search == '') {
            return alert('Please fill in the search field!')
        }

        const searchResults = await getPostsBySearch(search);

        ctx.render(searchTemplate(onSubmit, searchResults));
    }
}