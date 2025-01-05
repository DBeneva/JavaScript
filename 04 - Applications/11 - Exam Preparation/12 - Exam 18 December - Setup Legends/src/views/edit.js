import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { getRecordById, editRecord } from '../api/data.js';

const editTemplate = (setup, onSubmit) => html`
    <section id="edit">
        <div class="form">
          <img class="border" src="../images/banner.webp" alt="banner" />
          <h2>Edit Setup</h2>
          <form class="edit-form" @submit=${onSubmit}>
            <input type="text" name="setup-name" id="setup-name" placeholder="Setup Name" value="${setup.name}" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" value="${setup.imageUrl}" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10">${setup.description}</textarea>
            <textarea id="parts-used" name="parts-used" placeholder="Parts" rows="2" cols="10">${setup.parts}</textarea>
            <button type="submit">Edit</button>
          </form>
        </div>
    </section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const setup = await getRecordById(id);

    ctx.render(editTemplate(setup, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const editedSetup = {
            name: formData.get('setup-name'),
            imageUrl: formData.get('image-url'),
            description: formData.get('description'),
            parts: formData.get('parts-used'),
            likes: setup.likes,
            _id: setup._id
        };

        if (editedSetup.name == '' || editedSetup.imageUrl == '' || editedSetup.parts == '' || editedSetup.description == '') {
            return alert('All fields aare required!');

            // document.getElementById('errorBox').style.display = 'inline-block';
            // setTimeout(() => {
            //   document.getElementById('errorBox').style.display = 'none';
            // }, 3000);
        }

        editedSetup.name = editedSetup.name.trim();
        editedSetup.imageUrl = editedSetup.imageUrl.trim();
        editedSetup.description = editedSetup.description.trim();
        editedSetup.parts = editedSetup.parts.trim();
        editedSetup._ownerId = getUserId();

        await editRecord(id, editedSetup);
        ctx.page.redirect(`/setups/${id}`);
    }
}