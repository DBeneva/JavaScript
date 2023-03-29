window.addEventListener("load", solve);

function solve() {
    const title = document.getElementById('task-title');
    const category = document.getElementById('task-category');
    const content = document.getElementById('task-content');
    const publishBtn = document.getElementById('publish-btn');
    const reviewList = document.getElementById('review-list');
    const publishedList = document.getElementById('published-list');

    publishBtn.addEventListener('click', () => {
        if (title.value != '' && category.value != '' && content.value != '') {
            const li = createListItem();
            addButtons(li);
            reviewList.appendChild(li);

            title.value = '';
            category.value = '';
            content.value = '';
        }
    });

    function editTask(e) {
        e.target.parentNode.remove();

        title.value = e.target.parentNode.children[0].children[0].textContent;
        category.value = e.target.parentNode.children[0].children[1].textContent.split(': ')[1];
        content.value = e.target.parentNode.children[0].children[2].textContent.split(': ')[1];
    }

    function publishTask(e) {
        const li = e.target.parentNode;
        const editButton = li.children[1];
        const postButton = li.children[2];

        li.removeChild(editButton);
        li.removeChild(postButton);
        publishedList.appendChild(li);
        reviewList.removeChild(li);
    }

    function createListItem() {
        const li = document.createElement('li');
        li.className = 'rpost';
        const article = document.createElement('article');

        const titleElement = document.createElement('h4');
        titleElement.textContent = title.value;
        const categoryElement = document.createElement('p');
        categoryElement.textContent = `Category: ${category.value}`;
        const contentElement = document.createElement('p');
        contentElement.textContent = `Content: ${content.value}`;

        article.appendChild(titleElement);
        article.appendChild(categoryElement);
        article.appendChild(contentElement);
        li.appendChild(article);
        
        return li;
    }

    function addButtons(li) {
        const editBtn = document.createElement('button');
        editBtn.className = 'action-btn edit';
        editBtn.textContent = 'EDIT';
        editBtn.addEventListener('click', editTask);
        const postBtn = document.createElement('button');
        postBtn.className = 'action-btn post';
        postBtn.textContent = 'POST';
        postBtn.addEventListener('click', publishTask);

        li.appendChild(editBtn);
        li.appendChild(postBtn);
    }
}