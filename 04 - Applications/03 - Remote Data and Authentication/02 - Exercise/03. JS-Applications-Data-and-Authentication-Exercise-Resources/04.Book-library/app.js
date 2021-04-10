async function attachEvents() {
    document.getElementById('loadBooks').addEventListener('click', loadBooks);
    document.getElementById('createForm').addEventListener('submit', createBook);
    document.querySelector('table').addEventListener('click', handleTableClick);
}

attachEvents();

async function loadBooks() {
    const books = await request('http://localhost:3030/jsonstore/collections/books');
    const tBody = document.querySelector('tbody');

    tBody.innerHTML = '';
    Object.entries(books).map(createRow).forEach(r => tBody.appendChild(r));
}

function createRow([id, book]) {
    const row = e('tr', { id: id },
        e('td', { textContent: book.title }),
        e('td', { textContent: book.author }),
        e('td', {},
            e('button', { textContent: 'Edit' }),
            e('button', { textContent: 'Delete' })
        )
    );

    return row;
}

async function createBook(ev) {
    ev.preventDefault();

    const formData = new FormData(ev.target);
    const book = {
        title: formData.get('title'),
        author: formData.get('author')
    };

    await request('http://localhost:3030/jsonstore/collections/books', {
        method: 'post',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    ev.target.reset();
}

async function handleTableClick(ev) {
    if (ev.target.className == 'editBtn') {
        console.log('clicked edit');
        document.getElementById('createForm').style.display = 'none';
        document.getElementById('editForm').style.display = 'block';

        const bookId = ev.target.parentNode.parentNode.id;
        console.log(bookId);
        // const book = await request(`http://localhost:3030/jsonstore/collections/books/${bookId}`);
        // editBook(bookId, book);
    } else if (ev.target.className == 'deleteBtn') {
        // const bookId = ev.target.parentNode.parentNode.dataset.id;
        // deleteBook(bookId);
    }
}

async function editBook(id, book) {
    const result = await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'put',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(book)
    });

    return result;
}

async function deleteBook(id) {
    const result = await request(`http://localhost:3030/jsonstore/collections/books/${id}`, {
        method: 'delete'
    });
    return result;
}

async function request(url, options) {
    const response = await fetch(url, options);

    if (response.ok == false) {
        const error = await response.json();
        alert(error.message);
        throw new Error(error.message);
    }

    const data = await response.json();
    return data;
}

function e(type, attributes, ...content) {
    let element = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.slice(0, 2) == 'on') {
            element.addEventListener(attr.slice(2).toLocaleLowerCase(), value);
        } else {
            element[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(c), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            element.appendChild(node);
        } else {
            element.appendChild(e);
        }
    });

    return element;
}