import { html } from '../../node_modules/lit-html/lit-html.js';
import { getArticleById, editArticle, categories } from '../api/data.js';

const editTemplate = (article, onSubmit) => html`
<section id="edit-page" class="content">
    <h1>Edit Article</h1>

    <form @submit=${onSubmit} id="edit" method="">
        <fieldset>
            <p class="field title">
                <label for="title">Title:</label>
                <input type="text" name="title" id="title" placeholder="Enter article title" .value=${article.title}>
            </p>

            <p class="field category">
                <label for="category">Category:</label>
                <input type="text" name="category" id="category" placeholder="Enter article category"
                    .value=${article.category}>
            </p>
            <p class="field">
                <label for="content">Content:</label>
                <textarea name="content" id="content" .value=${article.content}></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Save Changes">
            </p>

        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const article = await getArticleById(id);

    ctx.render(editTemplate(article, onSubmit));


    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const editedArticle = {
            title: formData.get('title'),
            category: formData.get('category'),
            content: formData.get('content')
        };

        if (editedArticle.title == '' || editedArticle.category == '' || editedArticle.content == '') {
            return alert('Please fill in all mandatory fields!');
        }

        editedArticle.title = editedArticle.title.trim();
        editedArticle.category = editedArticle.category.trim();
        editedArticle.content = editedArticle.content.trim();

        if (categories[editedArticle.category] == undefined) {
            return alert('This category is not allowed!');
        }

        await editArticle(id, editedArticle);
        ctx.page.redirect(`/details/${id}`);
    }
}