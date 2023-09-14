const url = 'http://localhost:3030/jsonstore/tasks';

const form = document.getElementById('form');
const loadBtn = document.getElementById('load-history');
const addBtn = document.getElementById('add-weather');
const editBtn = document.getElementById('edit-weather');
const listContainer = document.getElementById('list');
const locationInput = document.getElementById('location');
const temperatureInput = document.getElementById('temperature');
const dateInput = document.getElementById('date');

loadBtn.addEventListener('click', loadRecords);
addBtn.addEventListener('click', addWeather);
editBtn.addEventListener('click', editWeather);

function loadRecords() {
    listContainer.innerHTML = '';

    request().then((data) => {
        console.log(Object.values(data));
        
        Object.values(data).forEach(x => {
            const changeBtn = el('button',
                { class: 'change-btn', event: ['click', changeRecord] },
                'Change'
            );        
            const deleteBtn = el('button',
                { class: 'delete-btn', event: ['click', deleteRecord] },
                'Delete'
            );
            
            const container = el('div',
                { class: 'container' },
                el('h2', x.location),
                el('h3', x.date),
                el('h3', { id: 'celsius' }, x.temperature),
                el('div', { class: 'buttons-container' }, changeBtn, deleteBtn)
            );

            listContainer.appendChild(container);

            function changeRecord(e) {
                e.preventDefault();

                form.id = x._id;

                locationInput.value = x.location;
                temperatureInput.value = x.temperature;
                dateInput.value = x.date;

                editBtn.removeAttribute('disabled');
                addBtn.setAttribute('disabled', 'disabled');

                listContainer.removeChild(container);
            }

            function deleteRecord() {
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                request(options, x._id).then(() => loadRecords());
            }
        });
    });
}

function addWeather(e) {
    e.preventDefault();

    const record = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    locationInput.value = '';
    temperatureInput.value = '';
    dateInput.value = '';

    request(options).then(() => loadRecords());
}

function editWeather(e) {
    e.preventDefault();

    const record = {
        location: locationInput.value,
        temperature: temperatureInput.value,
        date: dateInput.value,
        _id: form.id
    };
    
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    request(options, form.id).then(() => loadRecords());

    locationInput.value = '';
    temperatureInput.value = '';
    dateInput.value = '';
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