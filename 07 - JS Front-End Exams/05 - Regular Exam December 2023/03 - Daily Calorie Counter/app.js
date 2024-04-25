const url = 'http://localhost:3030/jsonstore/tasks';

const form = document.getElementsByTagName('form')[0];
const loadBtn = document.getElementById('load-meals');
const addBtn = document.getElementById('add-meal');
const editBtn = document.getElementById('edit-meal');
const listContainer = document.getElementById('list');
const foodInput = document.getElementById('food');
const timeInput = document.getElementById('time');
const caloriesInput = document.getElementById('calories');

loadBtn.addEventListener('click', loadMeals);
addBtn.addEventListener('click', addMeal);
editBtn.addEventListener('click', editMeal);

function loadMeals() {
    listContainer.innerHTML = '';

    request().then((data) => {
        console.log(Object.values(data));
        
        Object.values(data).forEach(x => {
            const changeBtn = el('button',
                { class: 'change-meal', event: ['click', changeRecord] },
                'Change'
            );        
            const deleteBtn = el('button',
                { class: 'delete-meal', event: ['click', deleteMeal] },
                'Delete'
            );
            
            const mealContainer = el('div',
                { class: 'meal' },
                el('h2', x.food),
                el('h3', x.time),
                el('h3', x.calories),
                el('div', { class: 'meal-buttons' }, changeBtn, deleteBtn)
            );

            listContainer.appendChild(mealContainer);

            function changeRecord(e) {
                e.preventDefault();

                form.id = x._id;

                foodInput.value = x.food;
                timeInput.value = x.time;
                caloriesInput.value = x.calories;

                editBtn.removeAttribute('disabled');
                addBtn.setAttribute('disabled', 'disabled');

                listContainer.removeChild(mealContainer);
            }

            function deleteMeal() {
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                request(options, x._id).then(() => loadMeals());
            }
        });
    });
}

function addMeal(e) {
    e.preventDefault();

    const record = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';

    request(options).then(() => loadMeals());
}

function editMeal(e) {
    e.preventDefault();

    const record = {
        food: foodInput.value,
        time: timeInput.value,
        calories: caloriesInput.value,
        _id: form.id
    };
    
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(record)
    };

    request(options, form.id).then(() => loadMeals());

    foodInput.value = '';
    timeInput.value = '';
    caloriesInput.value = '';
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