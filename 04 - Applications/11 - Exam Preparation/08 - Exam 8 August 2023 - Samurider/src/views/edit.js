import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { getPostById, editPost } from '../api/data.js';

const editTemplate = (motorcycle, onSubmit) => html`
<section id="edit">
    <h2>Edit Motorcycle</h2>
    <div class="form">
      <h2>Edit Motorcycle</h2>
      <form class="edit-form" @submit=${onSubmit}>
        <input
          type="text"
          name="model"
          id="model"
          placeholder="Model"
          value="${motorcycle.model}"
        />
        <input
          type="text"
          name="imageUrl"
          id="moto-image"
          placeholder="Moto Image"
          value="${motorcycle.imageUrl}"
        />
        <input
        type="number"
        name="year"
        id="year"
        placeholder="Year"
        value="${motorcycle.year}"
      />
      <input
      type="number"
      name="milage"
      id="milage"
      placeholder="milage"
      value="${motorcycle.milage}"
    />
    <input
      type="number"
      name="contact"
      id="contact"
      placeholder="contact"
      value="${motorcycle.contact}"
    />
      <textarea
        id="about"
        name="about"
        placeholder="about"
        rows="10"
        cols="50"
      >${motorcycle.about}</textarea>
        <button type="submit">Edit Motorcycle</button>
      </form>
  </div>
</section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const motorcycle = await getPostById(id);

  ctx.render(editTemplate(motorcycle, onSubmit));


  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const editedMotorcycle = {
      model: formData.get('model'),
      imageUrl: formData.get('imageUrl'),
      year: formData.get('year'),
      milage: formData.get('milage'),
      contact: formData.get('contact'),
      about: formData.get('about')
    };

    if (editedMotorcycle.imageUrl == '' || editedMotorcycle.model == '' || editedMotorcycle.year == '' || editedMotorcycle.milage == '' || editedMotorcycle.contact == '' || editedMotorcycle.about == '') {
      return alert('Please fill in all mandatory fields!');
    }

    editedMotorcycle.model = editedMotorcycle.model.trim();
    editedMotorcycle.imageUrl = editedMotorcycle.imageUrl.trim();
    editedMotorcycle.year = editedMotorcycle.year.trim();
    editedMotorcycle.milage = editedMotorcycle.milage.trim();
    editedMotorcycle.contact = editedMotorcycle.contact.trim();
    editedMotorcycle.about = editedMotorcycle.about.trim();
    editedMotorcycle._ownerId = getUserId();

    await editPost(id, editedMotorcycle);
    ctx.page.redirect(`/details/${id}`);
  }
}