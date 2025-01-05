const url = 'http://localhost:3030/jsonstore/workout';

const form = document.getElementsByTagName('form')[0];
const loadBtn = document.getElementById('load-workout');
const addBtn = document.getElementById('add-workout');
const editBtn = document.getElementById('edit-workout');
const listContainer = document.getElementById('list');
const workoutInput = document.getElementById('workout');
const locationInput = document.getElementById('location');
const dateInput = document.getElementById('date');

loadBtn.addEventListener('click', loadWorkout);
addBtn.addEventListener('click', addWorkout);
editBtn.addEventListener('click', editWorkout);

function loadWorkout() {
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
            
            const workoutContainer = el('div',
                { class: 'container' },
                el('h2', x.workout),
                el('h3', x.date),
                el('h3', { id: 'location' }, x.location),
                el('div', { class: 'buttons-container' }, changeBtn, deleteBtn)
            );

            listContainer.appendChild(workoutContainer);

            function changeRecord(e) {
                e.preventDefault();

                form.id = x._id;

                workoutInput.value = x.workout;
                locationInput.value = x.location;
                dateInput.value = x.date;

                editBtn.removeAttribute('disabled');
                addBtn.setAttribute('disabled', 'disabled');

                listContainer.removeChild(workoutContainer);
            }

            function deleteRecord() {
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                request(options, x._id).then(() => loadWorkout());
            }
        });
    });
}

function addWorkout(e) {
    e.preventDefault();

    const record = {
        workout: workoutInput.value,
        location: locationInput.value,
        date: dateInput.value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    workoutInput.value = '';
    locationInput.value = '';
    dateInput.value = '';

    request(options).then(() => loadWorkout());
}

function editWorkout(e) {
    e.preventDefault();

    const record = {
        workout: workoutInput.value,
        location: locationInput.value,
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

    request(options, form.id).then(() => loadWorkout());

    workoutInput.value = '';
    locationInput.value = '';
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