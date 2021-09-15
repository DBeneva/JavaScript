import { html } from '../../node_modules/lit-html/lit-html.js';
import { getRecentArticles, categories } from '../api/data.js';

const homeTemplate = (data) => html`
<section id="home-page" class="content">
    <h1>Recent Articles</h1>
    ${(data != undefined && data.length > 0) ? data.map(articleTemplate) : html`<h3>No articles yet</h3>`}
</section>`;

const articleTemplate = (article) => html`
<section class=${'recent ' + categories[article.category]}>
    <h2>${article.category}</h2>
    <article>
        ${article.content ? html`<h3>${article.title}</h3>
        <p>${article.content}</p>
        <a href=${`/details/${article._id}`} class="btn details-btn">Details</a>` : html`<h3>No articles yet</h3>`}
    </article>
</section>`;

export async function homePage(ctx) {
    const data = await getRecentArticles();

    ctx.setUserNav();
    ctx.render(homeTemplate(data));
}