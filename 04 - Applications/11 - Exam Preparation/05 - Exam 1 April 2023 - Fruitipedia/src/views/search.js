import { html } from '../../node_modules/lit-html/lit-html.js';
import { getFruitsBySearch } from '../api/data.js';

const searchTemplate = (onSubmit, searchResults) => html`
    <section id="search">
        <div class="form">
            <h2>Search</h2>
            <form class="search-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="search"
                    id="search-input"
                />
                <button class="button-list">Search</button>
            </form>
        </div>
        <h4>Results:</h4>
            ${searchResults
              ? searchResults.length > 0
                  ? html`<div class="search-result">${searchResults.map(previewTemplate)}</div>`
                  : html`<p class="no-result">No result.</p>`
              : ''
            }         
        
    </section>
`;

const previewTemplate = (fruit) => html`
    <div class="fruit">
        <img src="${fruit.imageUrl}" alt="example1" />
        <h3 class="title">${fruit.name}</h3>
        <p class="description">${fruit.description}</p>
        <a class="details-btn" href="${`/details/${fruit._id}`}">More Info</a>
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

        const searchResults = await getFruitsBySearch(search);

        ctx.render(searchTemplate(onSubmit, searchResults));
    }
}