import { render } from './node_modules/lit-html/lit-html.js';
import * as api from './data.js';
import { layoutTemplate } from './main.js';

const onSubmit = {
    'add-form': onCreateSubmit,
    'edit-form': onEditSubmit
};

const ctx = {
    books: [],
    async load() {
        ctx.books = await api.getBooks();
        update();
    },
    onEdit(bookId) {
        const book = ctx.books.find(b => b._id == bookId);
        update(book);
    },
    async onDelete(id) {
        const confirmed = confirm('Are you sure you want to delete this book?');

        if (confirmed) {
            await api.deleteBook(id);
        }
    }
};

document.body.addEventListener('submit', (ev) => {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    onSubmit[ev.target.id](formData, ev.target);
});

start();

async function start() {
    update();
}

function update(bookToEdit) {
    const result = layoutTemplate(ctx, bookToEdit);
    render(result, document.body);
}

async function onCreateSubmit(formData, form) {
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.createBook(book);
    form.reset();
}

async function onEditSubmit(formData, form) {
    const id = formData.get('_id');
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await api.editBook(id, book);
    form.reset();
    update();
}