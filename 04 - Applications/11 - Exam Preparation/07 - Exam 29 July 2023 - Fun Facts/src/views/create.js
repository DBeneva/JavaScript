import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { createFact } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create">
  <div class="form">
    <h2>Add Fact</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input
        type="text"
        name="category"
        id="category"
        placeholder="Category"
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
      rows="10"
      cols="50"
    ></textarea>
    <textarea
      id="additional-info"
      name="additional-info"
      placeholder="Additional Info"
      rows="10"
      cols="50"
    ></textarea>
      <button type="submit">Add Fact</button>
    </form>
  </div>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const fact = {
            category: formData.get('category'),
            imageUrl: formData.get('image-url'),
            description: formData.get('description'),
            moreInfo: formData.get('additional-info'),
        };

        if (fact.imageUrl == '' || fact.category == '' || fact.description == '' || fact.moreInfo == '') {
            return alert('Please fill in all mandatory fields!');
        }

        fact.imageUrl = fact.imageUrl.trim();
        fact.category = fact.category.trim();
        fact.description = fact.description.trim();
        fact.moreInfo = fact.moreInfo.trim();
        fact._ownerId = getUserId();

        console.log(fact);

        await createFact(fact);
        ctx.page.redirect('/dashboard');
    }
}