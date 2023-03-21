import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { getFruitById, editFruit } from '../api/data.js';

const editTemplate = (fruit, onSubmit) => html`
    <section id="edit">
        <div class="form">
          <h2>Edit Fruit</h2>
          <form class="edit-form" @submit=${onSubmit}>
              <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Fruit Name"
                  .value=${fruit.name}
              />
              <input
                  type="text"
                  name="imageUrl"
                  id="Fruit-image"
                  placeholder="Fruit Image URL"
                  .value=${fruit.imageUrl}
              />
              <textarea
                  id="fruit-description"
                  name="description"
                  placeholder="Description"
                  rows="10"
                  cols="50"
              >${fruit.description}</textarea>
              <textarea
                  id="fruit-nutrition"
                  name="nutrition"
                  placeholder="Nutrition"
                  rows="10"
                  cols="50"
              >${fruit.nutrition}</textarea>
              <button type="submit">post</button>
          </form>
        </div>
    </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const fruit = await getFruitById(id);

    ctx.render(editTemplate(fruit, onSubmit));


    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const editedFruit = {
            name: formData.get('name'),
            imageUrl: formData.get('imageUrl'),
            description: formData.get('description'),
            nutrition: formData.get('nutrition')
        };

        if (editedFruit.name == '' || editedFruit.imageUrl == '' || editedFruit.description == '' || editedFruit.nutrition == '') {
            return alert('Please fill in all mandatory fields!');
        }

        editedFruit.name = editedFruit.name.trim();
        editedFruit.imageUrl = editedFruit.imageUrl.trim();
        editedFruit.description = editedFruit.description.trim();
        editedFruit.nutrition = editedFruit.nutrition.trim();
        editedFruit._ownerId = getUserId();
        
        await editFruit(id, editedFruit);
        ctx.page.redirect(`/details/${id}`);
    }
}
       