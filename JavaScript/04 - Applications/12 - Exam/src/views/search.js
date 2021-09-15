import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticlesBySearch } from '../api/data.js';

const searchTemplate = (onSubmit, searchResult) => html`
<section id="search-page" class="content">
    <h1>Search</h1>
    <form @submit=${onSubmit} id="search-form">
        <p class="field search">
            <input type="text" placeholder="Search by article title" name="search">
        </p>
        <p class="field submit">
            <input class="btn submit" type="submit" value="Search">
        </p>
    </form>
    <div class="search-container">
        ${searchResult ? (searchResult.length > 0 ? searchResult.map(previewTemplate) : html`<h3>No matching articles</h3>`) : ''}
    </div>
</section>`;

const previewTemplate = (article) => html`
<a class="article-preview" href=${`/details/${article._id}`}>
    <article>
        <h3>Topic: <span>${article.title}</span></h3>
        <p>Category: <span>${article.category}</span></p>
    </article>
</a>`;

export async function searchPage(ctx) {
    ctx.render(searchTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const search = formData.get('search');

        if (search == '') {
            return alert('Please fill in the search field!')
        }

        const searchResult = await getArticlesBySearch(search);

        ctx.render(searchTemplate(onSubmit, searchResult));
    }
}