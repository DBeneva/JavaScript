import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { createPost } from '../api/data.js';

const createTemplate = (onSubmit) => html`
    <section id="create">
      <div class="form">
        <img class="border" src="./images/border.png" alt="">
        <h2>Add Character</h2>
        <form class="create-form" @submit=${onSubmit}>
          <input
            type="text"
            name="category"
            id="category"
            placeholder="Character Type"
          />
          <input
            type="text"
            name="image-url"
            id="image-url"
            placeholder="Image URL"
          />
          <textarea
          id="description"
          name="description"
          placeholder="Description"
          rows="2"
          cols="10"
        ></textarea>
        <textarea
          id="additional-info"
          name="additional-info"
          placeholder="Additional Info"
          rows="2"
          cols="10"
        ></textarea>
          <button type="submit">Add Character</button>
        </form>
        <img class="border" src="./images/border.png" alt="">
      </div>
    </section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const character = {
            category: formData.get('category'),
            imageUrl: formData.get('image-url'),
            description: formData.get('description'),
            moreInfo: formData.get('additional-info')
        };

        if (character.category == '' || character.imageUrl == '' || character.description == '' || character.moreInfo == '') {
            return alert('Please fill in all mandatory fields!');
        }

        character.category = character.category.trim();
        character.imageUrl = character.imageUrl.trim();
        character.description = character.description.trim();
        character.moreInfo = character.moreInfo.trim();
        character._ownerId = getUserId();

        console.log(character);

        await createPost(character);
        ctx.page.redirect('/dashboard');
    }
}