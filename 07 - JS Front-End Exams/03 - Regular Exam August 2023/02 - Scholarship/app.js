window.addEventListener("load", solve);

function solve() {
    const studentInput = document.getElementById('student'); 
    const universityInput = document.getElementById('university'); 
    const scoreInput = document.getElementById('score');
    const nextBtn = document.getElementById('next-btn');

    nextBtn.addEventListener('click', submit);

    function submit(e) {
        e.preventDefault();

        console.log('in');

        const student = studentInput.value;
        const university = universityInput.value;
        const score = scoreInput.value;
        
        if (student === '' || university === '' || score === '') {
            return;
        }

        const preview = document.getElementById('preview-list');

        const li = document.createElement('li');
        li.classList.add('application');
        const article = document.createElement('article');
        const title = document.createElement('h4');
        title.innerHTML = student;
        const universityP = document.createElement('p');
        universityP.innerHTML = `University: ${university}`;
        const scoreP = document.createElement('p');
        scoreP.innerHTML = `Score: ${score}`;
        const editBtn = document.createElement('button');
        editBtn.classList.add('action-btn', 'edit');
        editBtn.innerHTML = 'edit';
        editBtn.addEventListener('click', edit);
        const applyBtn = document.createElement('button');
        applyBtn.addEventListener('click', apply);
        applyBtn.classList.add('action-btn', 'apply');
        applyBtn.innerHTML = 'apply';

        article.appendChild(title);
        article.appendChild(universityP);
        article.appendChild(scoreP);
        li.appendChild(article);
        li.appendChild(editBtn);
        li.appendChild(applyBtn);

        preview.appendChild(li);

        studentInput.value = '';
        universityInput.value = '';
        scoreInput.value = '';
        nextBtn.setAttribute('disabled', 'disabled');

        function edit() {
            studentInput.value = student;
            universityInput.value = university;
            scoreInput.value = score;
            nextBtn.removeAttribute('disabled');

            preview.removeChild(li);
        }

        function apply() {
            const candidates = document.getElementById('candidates-list');
            li.removeChild(editBtn);
            li.removeChild(applyBtn);
            candidates.appendChild(li);
            preview.removeChild(li);
            nextBtn.removeAttribute('disabled');
        }
    }
}