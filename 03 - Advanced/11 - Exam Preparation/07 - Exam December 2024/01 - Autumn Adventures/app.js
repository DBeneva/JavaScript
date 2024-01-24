window.addEventListener('load', solve);

function solve() {
    const timeInput = document.getElementById('time');
    const dateInput = document.getElementById('date');
    const placeInput = document.getElementById('place');
    const eventInput = document.getElementById('event-name');
    const emailInput = document.getElementById('email');
    const addBtn = document.getElementById('add-btn');
    const lastCheckList = document.getElementById('check-list');
    const upcomingList = document.getElementById('upcoming-list');
    const finishedList = document.getElementById('finished-list');
    const clearBtn = document.getElementById('clear');

    addBtn.addEventListener('click', addEvent);
    clearBtn.addEventListener('click', clearEvent);

    function addEvent() {
        const time = timeInput.value;
        const date = dateInput.value;
        const place = placeInput.value;
        const event = eventInput.value;
        const email = emailInput.value;

        if (
            time === ''
            || date === ''
            || place === ''
            || event === ''
            || email === ''
        ) {
            return;
        }

        const editBtn = el('button',
            { class: 'edit-btn', event: ['click', editEvent] },
            'Edit'
        );

        const continueBtn = el('button',
            { class: 'continue-btn', event: ['click', continueHandler] },
            'Continue'
        );

        const li = el('li', { class: 'event-content' },
            el('article',
                el('p', `Begins: ${date} at: ${time}`),
                el('p', `In: ${place}`),
                el('p', `Event: ${event}`),
                el('p', `Contact: ${email}`)
            ),
            editBtn,
            continueBtn
        );

        lastCheckList.appendChild(li);

        timeInput.value = '';
        dateInput.value = '';
        placeInput.value = '';
        eventInput.value = '';
        emailInput.value = '';

        addBtn.setAttribute('disabled', 'disabled');

        function editEvent() {
            timeInput.value = time;
            dateInput.value = date;
            placeInput.value = place;
            eventInput.value = event;
            emailInput.value = email;

            lastCheckList.removeChild(li);
            addBtn.removeAttribute('disabled');
        }

        function continueHandler() {
            li.removeChild(editBtn);
            li.removeChild(continueBtn);

            const moveToFinishedBtn = el('button',
                { class: 'finished-btn', event: ['click', moveToFinished] },
                'Move to Finished'
            );

            li.appendChild(moveToFinishedBtn);
            upcomingList.appendChild(li);

            function moveToFinished() {
                li.removeChild(moveToFinishedBtn);
                li.appendChild(clearBtn);
                finishedList.appendChild(li);
            }
        }
    }

    function clearEvent() {
        finishedList.innerHTML = '';
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