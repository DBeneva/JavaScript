import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { createRecord } from '../api/data.js';

const createTemplate = (onSubmit) => html`
    <section id="create">
        <div class="form">
          <img class="border" src="../images/banner.webp" alt="banner" />
          <h2>Add Setup</h2>
          <form class="create-form" @submit=${onSubmit}>
            <input type="text" name="setup-name" id="setup-name" placeholder="Setup Name" />
            <input type="text" name="image-url" id="image-url" placeholder="Image URL" />
            <textarea id="description" name="description" placeholder="Description" rows="2" cols="10"></textarea>
            <textarea id="parts-used" name="parts-used" placeholder="Parts" rows="2" cols="10"></textarea>
            <button type="submit">Add setup</button>
          </form>
        </div>
    </section>
`;

export async function createPage(ctx) {
    ctx.render(createTemplate(onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);

        const setup = {
            name: formData.get('setup-name'),
            imageUrl: formData.get('image-url'),
            description: formData.get('description'),
            parts: formData.get('parts-used')
        };

        if (setup.name == '' || setup.imageUrl == '' || setup.parts == '' || setup.description == '') {
            return alert('All fields aare required!');
            
            // document.getElementById('errorBox').style.display = 'inline-block';
            // setTimeout(() => {
            //   document.getElementById('errorBox').style.display = 'none';
            // }, 3000);
        }

        setup.name = setup.name.trim();
        setup.imageUrl = setup.imageUrl.trim();
        setup.description = setup.description.trim();
        setup.parts = setup.parts.trim();
        setup.likes = 0;
        setup._ownerId = getUserId();

        console.log(setup);

        await createRecord(setup);
        ctx.page.redirect('/dashboard');
    }
}