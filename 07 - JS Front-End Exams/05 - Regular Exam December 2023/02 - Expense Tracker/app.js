window.addEventListener("load", solve);

function solve() {
    const expenseInput = document.getElementById('expense');
    const amountInput = document.getElementById('amount');
    const dateInput = document.getElementById('date');
    const addBtn = document.getElementById('add-btn');
    const deleteBtn = document.getElementsByClassName('btn delete')[0];
    const previewList = document.getElementById('preview-list');
    const expensesList = document.getElementById('expenses-list');

    addBtn.addEventListener('click', addExpense);
    deleteBtn.addEventListener('click', deleteExpense);

    function addExpense() {
        const expense = expenseInput.value;
        const amount = amountInput.value;
        const date = dateInput.value;

        if (expense === '' || amount === '' || date === '') {
            return;
        }

        const buttons = el('div', { class: 'buttons' },
            el('button', { class: 'btn edit', event: ['click', editExpense] }, 'edit'),
            el('button', { class: 'btn ok', event: ['click', confirmExpense] }, 'ok')
        );

        const li = el('li', { class: 'expense-item' },
            el('article',
                el('p', `Type: ${expense}`),
                el('p', `Amount: ${amount}$`),
                el('p', `Date: ${date}`)
            ),
            buttons
        );

        previewList.appendChild(li);

        expenseInput.value = '';
        amountInput.value = '';
        dateInput.value = '';

        addBtn.setAttribute('disabled', 'disabled');

        function editExpense() {
            expenseInput.value = expense;
            amountInput.value = amount;
            dateInput.value = date;

            previewList.removeChild(li);
            addBtn.removeAttribute('disabled');
        }

        function confirmExpense() {
            li.removeChild(buttons);
            expensesList.appendChild(li);

        }
    }

    function deleteExpense() {
        location.reload();
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