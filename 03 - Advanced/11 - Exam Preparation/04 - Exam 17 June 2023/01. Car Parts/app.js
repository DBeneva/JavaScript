window.addEventListener('load', solve);

function solve() {
        console.log('in');
    const nextBtn = document.getElementById('next-btn');
    const carModelInput = document.getElementById('car-model');
    const carYearInput = document.getElementById('car-year');
    const partNameInput = document.getElementById('part-name');
    const partNumberInput = document.getElementById('part-number');
    const conditionInput = document.getElementById('condition');
    const infoList = document.getElementsByClassName('info-list')[0];
    const confirmList = document.getElementsByClassName('confirm-list')[0];
    const completeImg = document.getElementById('complete-img');
    const completeText = document.getElementById('complete-text');

    console.log(infoList);
    nextBtn.addEventListener('click', search);
    
    function search(e) {
        e.preventDefault();

        const carModel = carModelInput.value;
        const carYear = carYearInput.value;
        const partName = partNameInput.value;
        const partNumber = partNumberInput.value;
        const condition = conditionInput.value;

        if (carModel === ''
            || carYear === ''
            || partName === ''
            || partNumber === ''
            || condition === ''
            || Number(carYear) < 1980
            || Number(carYear) > 2023) {
            
            return;
        }

        completeImg.setAttribute('visibility', 'hidden');
        completeText.textContent = '';

        const li = document.createElement('li');
        li.classList.add('part-content');
        const article = document.createElement('article');

        const carModelP = document.createElement('p');
        carModelP.textContent = `Car Model: ${carModel}`;
        const carYearP = document.createElement('p');
        carYearP.textContent = `Car Year: ${carYear}`;
        const partNameP = document.createElement('p');
        partNameP.textContent = `Part Name: ${partName}`;
        const partNumberP = document.createElement('p');
        partNumberP.textContent = `Part Number: ${partNumber}`;
        const conditionP = document.createElement('p');
        conditionP.textContent = `Condition: ${condition}`;

        article.appendChild(carModelP);
        article.appendChild(carYearP);
        article.appendChild(partNameP);
        article.appendChild(partNumberP);
        article.appendChild(conditionP);

        const editBtn = document.createElement('button');
        editBtn.classList.add('edit-btn');
        editBtn.textContent = 'Edit';
        editBtn.addEventListener('click', editHandler);

        const continueBtn = document.createElement('button');
        continueBtn.classList.add('continue-btn');
        continueBtn.textContent = 'Continue';
        continueBtn.addEventListener('click', continueHandler);

        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(continueBtn);

        infoList.appendChild(li);

        carModelInput.value = '';
        carYearInput.value = '';
        partNameInput.value = '';
        partNumberInput.value = '';
        conditionInput.value = '';

        nextBtn.setAttribute('disabled', 'disabled');

        function editHandler() {
            carModelInput.value = carModel;
            carYearInput.value = carYear;
            partNameInput.value = partName;
            partNumberInput.value = partNumber;
            conditionInput.value = condition;

            nextBtn.removeAttribute('disabled');
            infoList.removeChild(li);
        }

        function continueHandler() {
            li.removeChild(editBtn);
            li.removeChild(continueBtn);

            const confirmBtn = document.createElement('button');
            confirmBtn.classList.add('confirm-btn');
            confirmBtn.textContent = 'Confirm';
            confirmBtn.addEventListener('click', confirmHandler);
        
            const cancelBtn = document.createElement('button');
            cancelBtn.classList.add('cancel-btn');
            cancelBtn.textContent = 'Cancel';
            cancelBtn.addEventListener('click', cancelHandler);

            li.appendChild(confirmBtn);
            li.appendChild(cancelBtn);

            confirmList.appendChild(li);
            infoList.removeChild(li);

            function confirmHandler() {
                confirmList.removeChild(li);
                nextBtn.removeAttribute('disabled');
                completeImg.style.visibility = 'visible';
                completeText.textContent = 'Part is Ordered!';
            }

            function cancelHandler() {
                confirmList.removeChild(li);
                nextBtn.removeAttribute('disabled');
            }
        }
    }
};


    
    
