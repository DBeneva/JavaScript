const url = 'http://localhost:3030/jsonstore/tasks';

const form = document.getElementsByTagName('form')[0];
const loadBtn = document.getElementById('load-vacations');
loadBtn.addEventListener('click', loadVacations);
const addVacationBtn = document.getElementById('add-vacation');
addVacationBtn.addEventListener('click', addVacation);
const editVacationBtn = document.getElementById('edit-vacation');
editVacationBtn.addEventListener('click', editVacation);
const nameInput = document.getElementById('name');
const daysInput = document.getElementById('num-days');
const dateInput = document.getElementById('from-date');

function loadVacations() {
    list.innerHTML = '';

    request().then((data) => {
        console.log(Object.values(data));

        const list = document.getElementById('list');
        
        Object.values(data).forEach(v => {
            const container = document.createElement('div');
            container.classList.add('container');
            const nameElement = document.createElement('h2');
            const dateElement = document.createElement('h3');
            const daysElement = document.createElement('h3');
            const changeBtn = document.createElement('button');
            changeBtn.classList.add('change-btn');
            changeBtn.textContent = 'Change';
            changeBtn.addEventListener('click', changeVacation);
            const doneBtn = document.createElement('button');
            doneBtn.textContent = 'Done';
            doneBtn.classList.add('done-btn');
            doneBtn.addEventListener('click', deleteVacation);

            const name = v.name;
            const date = v.date;
            const days = v.days;

            nameElement.textContent = name;
            dateElement.textContent = date;
            daysElement.textContent = days;

            container.appendChild(nameElement);
            container.appendChild(dateElement);
            container.appendChild(daysElement);
            container.appendChild(changeBtn);
            container.appendChild(doneBtn);

            list.appendChild(container);

            function changeVacation(e) {
                e.preventDefault();

                form.id = v._id;

                nameInput.value = name;
                daysInput.value = days;
                dateInput.value = date;

                editVacationBtn.removeAttribute('disabled');
                addVacationBtn.setAttribute('disabled', 'disabled');

                list.removeChild(container);
            }

            function deleteVacation() {
                const options = {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                };
                request(options, v._id).then(() => loadVacations());
            }
        });
    });
}

function addVacation(e) {
    e.preventDefault();

    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;

    nameInput.value = '';
    daysInput.value = '';
    dateInput.value = '';

    const vacation = { name, days, date };
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vacation)
    };


    request(options).then(() => loadVacations());
}

function editVacation(e) {
    e.preventDefault();

    const name = nameInput.value;
    const days = daysInput.value;
    const date = dateInput.value;
    const id = form.id;

    const vacation = { name, days, date, _id: id };
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(vacation)
    };

    request(options, id).then(() => loadVacations());
    editVacationBtn.setAttribute('disabled', 'disabled');
    addVacationBtn.removeAttribute('disabled');
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