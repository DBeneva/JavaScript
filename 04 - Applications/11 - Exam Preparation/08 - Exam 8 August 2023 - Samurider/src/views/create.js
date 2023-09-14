import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { createPost } from '../api/data.js';

const createTemplate = (onSubmit) => html`
<section id="create">
  <h2>Add Motorcycle</h2>
  <div class="form">
    <h2>Add Motorcycle</h2>
    <form class="create-form" @submit=${onSubmit}>
      <input
        type="text"
        name="model"
        id="model"
        placeholder="Model"
      />
      <input
        type="text"
        name="imageUrl"
        id="moto-image"
        placeholder="Moto Image"
      />
      <input
        type="number"
        name="year"
        id="year"
        placeholder="Year"
      />
      <input
        type="number"
        name="milage"
        id="milage"
        placeholder="milage"
      />
      <input
        type="text"
        name="contact"
        id="contact"
        placeholder="contact"
      />
      <textarea
        id="about"
        name="about"
        placeholder="about"
        rows="10"
        cols="50"
      ></textarea>
      <button type="submit">Add Motorcycle</button>
    </form>
  </div>
</section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const motorcycle = {
            model: formData.get('model'),
            imageUrl: formData.get('imageUrl'),
            year: formData.get('year'),
            milage: formData.get('milage'),
            contact: formData.get('contact'),
            about: formData.get('about')
        };

        if (motorcycle.imageUrl == '' || motorcycle.model == '' || motorcycle.year == '' || motorcycle.milage == '' || motorcycle.contact == '' || motorcycle.about == '') {
            return alert('Please fill in all mandatory fields!');
        }

        motorcycle.model = motorcycle.model.trim();
        motorcycle.imageUrl = motorcycle.imageUrl.trim();
        motorcycle.year = motorcycle.year.trim();
        motorcycle.milage = motorcycle.milage.trim();
        motorcycle.contact = motorcycle.contact.trim();
        motorcycle.about = motorcycle.about.trim();
        motorcycle._ownerId = getUserId();

        console.log(motorcycle);

        await createPost(motorcycle);
        ctx.page.redirect('/dashboard');
    }
}