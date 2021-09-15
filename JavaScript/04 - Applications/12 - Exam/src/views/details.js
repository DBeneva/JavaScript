import { html } from '../../node_modules/lit-html/lit-html.js';
import * as api from '../api/data.js';

const detailsTemplate = (article, onDelete, goBack, isOwner) => html`
<section id="details-page" class="content details">
    <h1>${article.title}</h1>

    <div class="details-content">
        <strong>Published in category ${article.category}</strong>
        <p>${article.content}</p>

        <div class="buttons">
            ${isOwner ? html`
            <a @click=${onDelete} href="javascript:void(0)" class="btn delete">Delete</a>
            <a href=${`/data/wiki/${article._id}`} class="btn edit">Edit</a>` : ''}
            <a @click=${goBack} class="btn edit">Back</a>
        </div>
    </div>
</section>`;

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const item = await api.getArticleById(id);
    const userId = api.getUserId();

    ctx.render(detailsTemplate(item, onDelete, goBack, item._ownerId == userId));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete this item?');

        if (confirmed) {
            await api.deleteArticle(item._id);
            ctx.page.redirect('/');
        }
    }

    function goBack() {
        history.back();
    }
}