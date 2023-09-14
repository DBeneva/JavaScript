import { html } from '../../node_modules/lit-html/lit-html.js';
import { getUserId } from '../api/api.js';
import { getFactById, editFact } from '../api/data.js';

const editTemplate = (fact, onSubmit) => html`
<section id="edit">
  <div class="form">
    <h2>Edit Fact</h2>
    <form class="edit-form" @submit=${onSubmit}>
      <input
      type="text"
      name="category"
      id="category"
      placeholder="Category"
      value=${fact.category}
    />
    <input
      type="text"
      name="image-url"
      id="image-url"
      placeholder="Image URL"
      value=${fact.imageUrl}
    />
    <textarea
    id="description"
    name="description"
    placeholder="Description"
    rows="10"
    cols="50"
  >${fact.description}</textarea>
  <textarea
    id="additional-info"
    name="additional-info"
    placeholder="Additional Info"
    rows="10"
    cols="50"
  >${fact.moreInfo}</textarea>
      <button type="submit">Post</button>
    </form>
  </div>
</section>
`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const event = await getFactById(id);

    ctx.render(editTemplate(event, onSubmit));


    async function onSubmit(ev) {
        ev.preventDefault();

        const formData = new FormData(ev.target);
        const editedFact = {
            imageUrl: formData.get('image-url'),
            category: formData.get('category'),
            description: formData.get('description'),
            moreInfo: formData.get('additional-info')
        };

        if (editedFact.moreInfo == '' || editedFact.imageUrl == '' || editedFact.category == '' || editedFact.description == '') {
            return alert('Please fill in all mandatory fields!');
        }

        editedFact.imageUrl = editedFact.imageUrl.trim();
        editedFact.category = editedFact.category.trim();
        editedFact.description = editedFact.description.trim();
        editedFact.moreInfo = editedFact.moreInfo.trim();
        editedFact._ownerId = getUserId();
        
        await editFact(id, editedFact);
        ctx.page.redirect(`/details/${id}`);
    }
}
       

{/* <section id="edit">
        <div class="form">
            <h2>Edit Event</h2>
            <form class="edit-form" @submit=${onSubmit}>
                <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Event"
                    .value=${event.name}
                />
                <input
                    type="text"
                    name="imageUrl"
                    id="event-image"
                    placeholder="Event Image"
                    .value=${event.imageUrl}
                />
                <input
                    type="text"
                    name="category"
                    id="event-category"
                    placeholder="Category"
                    .value=${event.category}
                />  
                <textarea
                    id="event-description"
                    name="description"
                    placeholder="Description"
                    rows="5"
                    cols="50"
                >${event.description}</textarea>
              
                <label for="date-and-time">Event Time:</label>
                <input
                    type="text"
                    name="date"
                    id="date"
                    placeholder="When?"
                    .value=${event.date}
                />

                <button type="submit">Edit</button>
            </form>
        </div>
    </section> */}