import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { createFruit } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create">
    <div class="form">
        <h2>Add Fruit</h2>
        <form class="create-form" @submit=${onSubmit}>
            <input
                type="text"
                name="name"
                id="name"
                placeholder="Fruit Name"
            />
            <input
                type="text"
                name="imageUrl"
                id="Fruit-image"
                placeholder="Fruit Image"
            />
            <textarea
              id="fruit-description"
              name="description"
              placeholder="Description"
              rows="10"
              cols="50"
            ></textarea>
            <textarea
                id="fruit-nutrition"
                name="nutrition"
                placeholder="Nutrition"
                rows="10"
                cols="50"
            ></textarea>
            <button type="submit">Add Fruit</button>
        </form>
    </div>
    section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const fruit = {
            name: formData.get('name'),
            imageUrl: formData.get('imageUrl'),
            description: formData.get('description'),
            nutrition: formData.get('nutrition')
        };

        if (fruit.name == '' || fruit.imageUrl == '' || fruit.description == '' || fruit.nutrition == '') {
            return alert('Please fill in all mandatory fields!');
        }

        fruit.name = fruit.name.trim();
        fruit.imageUrl = fruit.imageUrl.trim();
        fruit.description = fruit.description.trim();
        fruit.nutrition = fruit.nutrition.trim();
        fruit._ownerId = getUserId();

        console.log(fruit);

        await createFruit(fruit);
        ctx.page.redirect('/dashboard');
    }
}
        