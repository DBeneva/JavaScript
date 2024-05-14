window.addEventListener("load", solve);

function solve() {
    const placeInput = document.getElementById('place');
    const actionInput = document.getElementById('action');
    const personInput = document.getElementById('person');
    const addBtn = document.getElementById('add-btn');
    const taksList = document.getElementById('task-list');
    const doneList = document.getElementById('done-list');

    addBtn.addEventListener('click', addTask);

    function addTask() {
        const place = placeInput.value;
        const action = actionInput.value;
        const person = personInput.value;

        if (place === '' || action === '' || person === '') {
            return;
        }

        const buttons = el('div', { class: 'buttons' },
            el('button',
                { class: 'edit', event: ['click', editTask] },
                'Edit'
            ),
            el('button',
                { class: 'done', event: ['click', finishTask] },
                'Done')
        );

        const li = el('li', { class: 'clean-task' },
            el('article',
                el('p', `Place:${place}`),
                el('p', `Action:${action}`),
                el('p', `Person:${person}`),
            ),
            buttons
        );

        taksList.appendChild(li);

        placeInput.value = '';
        actionInput.value = '';
        personInput.value = '';

        function editTask() {
            placeInput.value = place;
            actionInput.value = action;
            personInput.value = person;

            taksList.removeChild(li);
        }

        function finishTask() {
            const deleteBtn = el('button',
                { class: 'delete', event: ['click', deleteTask] },
                'Delete'
            );
            
            li.removeChild(buttons);
            li.appendChild(deleteBtn);
            doneList.appendChild(li);

            function deleteTask() {
                doneList.removeChild(li);
            }
        }
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
}