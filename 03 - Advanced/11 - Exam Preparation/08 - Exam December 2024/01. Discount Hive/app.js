window.addEventListener('load', solve);

function solve() {
    const discountInput = document.getElementById('discount');
    const dateInput = document.getElementById('date');
    const storeInput = document.getElementById('store');
    const productInput = document.getElementById('product');
    const codeInput = document.getElementById('code');
    const addBtn = document.getElementById('add-btn');
    const checkList = document.getElementById('check-list');
    const validateList = document.getElementById('validate-list');
    const discountList = document.getElementById('discount-list');
    const clearBtn = document.getElementById('clear');

    addBtn.addEventListener('click', addDiscount);
    clearBtn.addEventListener('click', clearAll);

    function addDiscount() {
        const discount = discountInput.value;
        const date = dateInput.value;
        const store = storeInput.value;
        const product = productInput.value;
        const code = codeInput.value;

        if (
            discount === ''
            || date === ''
            || store === ''
            || product === ''
            || code === ''
        ) {
            return;
        }

        const editBtn = el('button',
            { class: 'edit-btn', event: ['click', editHandler] },
            'Edit'
        );

        const continueBtn = el('button',
            { class: 'continue-btn', event: ['click', continueHandler] },
            'Continue'
        );

        const li = el('li', { class: 'discount-content' },
            el('article',
                el('p', `Expire: ${date}`),
                el('p', `Store: ${store}`),
                el('p', `Product: ${product}`),
                el('p', `Code: ${code}`),
                el('p', `Discount: ${discount}%`)
            ),
            editBtn,
            continueBtn
        );

        checkList.appendChild(li);

        discountInput.value = '';
        dateInput.value = '';
        storeInput.value = '';
        productInput.value = '';
        codeInput.value = '';

        addBtn.setAttribute('disabled', 'disabled');

        function editHandler() {
            discountInput.value = discount;
            dateInput.value = date;
            storeInput.value = store;
            productInput.value = product;
            codeInput.value = code;

            checkList.removeChild(li);
            addBtn.removeAttribute('disabled');
        }

        function continueHandler() {
            li.removeChild(editBtn);
            li.removeChild(continueBtn);

            const validateBtn = el('button',
                { class: 'validate-btn', event: ['click', validate] },
                'Validate'
            );

            li.appendChild(validateBtn);
            validateList.appendChild(li);

            function validate() {
                li.removeChild(validateBtn);
                li.appendChild(clearBtn);
                discountList.appendChild(li);
                addBtn.removeAttribute('disabled');
            }
        }
    }

    function clearAll() {
        discountList.innerHTML = '';
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
}