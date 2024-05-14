const url = 'http://localhost:3030/jsonstore/gifts';

const form = document.getElementsByTagName('form')[0];
const loadBtn = document.getElementById('load-presents');
const addBtn = document.getElementById('add-present');
const editBtn = document.getElementById('edit-present');
const giftList = document.getElementById('gift-list');
const giftInput = document.getElementById('gift');
const forInput = document.getElementById('for');
const priceInput = document.getElementById('price');

loadBtn.addEventListener('click', loadPresents);
addBtn.addEventListener('click', addPresent);
editBtn.addEventListener('click', editPresent);

function loadPresents() {
    giftList.innerHTML = '';

    request().then((data) => {
        console.log(Object.values(data));
        
        Object.values(data).forEach(x => {
            const buttons = el('div', { class: 'buttons-container' },
                el('button',
                    { class: 'change-btn', event: ['click', editPresent] },
                    'Change'
                ),
                el('button',
                    { class: 'delete-btn', event: ['click', deletePresent] },
                'Delete'
                )
            );
            
            const gift = el('div',
                { class: 'gift-sock' },
                el('div', { class: 'content' },
                    el('p', x.gift),
                    el('p', x.for),
                    el('p', x.price)                
                ),
                buttons
            );

            giftList.appendChild(gift);

            function editPresent(e) {
                e.preventDefault();

                form.id = x._id;

                giftInput.value = x.gift;
                forInput.value = x.for;
                priceInput.value = x.price;

                editBtn.removeAttribute('disabled');
                addBtn.setAttribute('disabled', 'disabled');

                giftList.removeChild(gift);
            }

            function deletePresent() {
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                request(options, x._id).then(() => loadPresents());
            }
        });
    });
}

function addPresent(e) {
    e.preventDefault();

    const record = {
        gift: giftInput.value,
        for: forInput.value,
        price: priceInput.value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    giftInput.value = '';
    forInput.value = '';
    priceInput.value = '';

    request(options).then(() => loadPresents());
}

function editPresent(e) {
    e.preventDefault();

    const record = {
        gift: giftInput.value,
        for: forInput.value,
        price: priceInput.value,
        _id: form.id
    };
    
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    request(options, form.id).then(() => loadPresents());

    giftInput.value = '';
    forInput.value = '';
    priceInput.value = '';
    editBtn.setAttribute('disabled', 'disabled');
    addBtn.removeAttribute('disabled');
}

function el(type, ...content) {
    let element = document.createElement(type);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            let node = document.createTextNode(e);
            element.appendChild(node);
        } else if (e instanceof HTMLElement) {
            element.appendChild(e);
        } else if (typeof e == 'object') {
            Object.entries(e).forEach(([name, value]) => {
                if (name == 'event') {
                    element.addEventListener(...value);
                } else {
                    element.setAttribute(name, value);
                }
            });
        }
    });

    return element;
}

function request(options, id) {
    try {
        let response;

        if (options && options.method == 'PUT') {
            response = fetch(`${url}/${id}`, options);
        } else if (options && options.method == 'DELETE') {
            response = fetch(`${url}/${id}`, options).then((res) => res.json());
        } else {
            response = fetch(url, options).then((res) => res.json());
        }
        
        return response;
    } catch (error) {
        throw error;
    }
}