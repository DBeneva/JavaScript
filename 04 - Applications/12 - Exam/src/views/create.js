import { html } from '../../node_modules/lit-html/lit-html.js';
import { createArticle, categories } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create-page" class="content">
    <h1>Create Article</h1>

    <form @submit=${onSubmit} id="create" method="">
        <fieldset>
            <p class="field title">
                <label for="create-title">Title:</label>
                <input type="text" id="create-title" name="title" placeholder="Enter article title">
            </p>

            <p class="field category">
                <label for="create-category">Category:</label>
                <input type="text" id="create-category" name="category" placeholder="Enter article category">
            </p>
            <p class="field">
                <label for="create-content">Content:</label>
                <textarea name="content" id="create-content"></textarea>
            </p>

            <p class="field submit">
                <input class="btn submit" type="submit" value="Create">
            </p>

        </fieldset>
    </form>
</section>`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const article = {
            title: formData.get('title'),
            category: formData.get('category'),
            content: formData.get('content')
        };

        if (article.title == '' || article.category == '' || article.content == '') {
            return alert('Please fill in all mandatory fields!');
        }

        article.title = article.title.trim();
        article.category = article.category.trim();
        article.content = article.content.trim();

        if (categories[article.category] == undefined) {
            return alert('This category is not allowed!');
        }

        await createArticle(article);
        ctx.page.redirect('/');
    }
}