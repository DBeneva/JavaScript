import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { getPostById, editPost } from '../api/data.js';

const editTemplate = (character, onSubmit) => html`
    <section id="edit">
      <div class="form">
        <img class="border" src="./images/border.png" alt="">
        <h2>Edit Character</h2>
        <form class="edit-form" @submit=${onSubmit}>
          <input
          type="text"
          name="category"
          id="category"
          placeholder="Character Type"
          value=${character.category}
        />
        <input
          type="text"
          name="image-url"
          id="image-url"
          placeholder="Image URL"
          value=${character.imageUrl}
        />
        <textarea
        id="description"
        name="description"
        placeholder="Description"
        rows="2"
        cols="10"
      >${character.description}</textarea>
      <textarea
        id="additional-info"
        name="additional-info"
        placeholder="Additional Info"
        rows="2"
        cols="10"
      >${character.moreInfo}</textarea>
          <button type="submit">Edit</button>
        </form>
        <img class="border" src="./images/border.png" alt="">
      </div>
    </section>
`;

export async function editPage(ctx) {
  const id = ctx.params.id;
  const character = await getPostById(id);

  ctx.render(editTemplate(character, onSubmit));


  async function onSubmit(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const editedCharacter = {
      category: formData.get('category'),
      imageUrl: formData.get('image-url'),
      description: formData.get('description'),
      moreInfo: formData.get('additional-info')
    };

    if (editedCharacter.category == '' || editedCharacter.imageUrl == '' || editedCharacter.description == '' || editedCharacter.moreInfo == '') {
      return alert('Please fill in all mandatory fields!');
    }

    editedCharacter.category = editedCharacter.category.trim();
    editedCharacter.imageUrl = editedCharacter.imageUrl.trim();
    editedCharacter.description = editedCharacter.description.trim();
    editedCharacter.moreInfo = editedCharacter.moreInfo.trim();
    editedCharacter._ownerId = getUserId();

    await editPost(id, editedCharacter);
    ctx.page.redirect(`/details/${id}`);
  }
}