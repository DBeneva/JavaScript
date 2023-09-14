const baseUrl = 'http://localhost:3030/jsonstore/tasks';

const form = document.getElementsByTagName('form')[0];
const loadCoursesBtn = document.getElementById('load-course');
const titleInput = document.getElementById('course-name');
const typeInput = document.getElementById('course-type');
const descriptionInput = document.getElementById('description');
const teacherInput = document.getElementById('teacher-name');
const courseIdInput = document.getElementById('course-id');
const addCourseBtn = document.getElementById('add-course');
const editCourseBtn = document.getElementById('edit-course');
const coursesList = document.getElementById('list');

function attachEvents() {
    loadCoursesBtn.addEventListener('click', loadCourses);
    editCourseBtn.addEventListener('click', editCourse);
    addCourseBtn.addEventListener('click', addCourse);
}

function loadCourses() {
    coursesList.innerHTML = '';

    request().then((courses) => {
        console.log(courses);
        
        Object.values(courses).forEach(c => {
            coursesList.appendChild(createCourse(c));
        });
    });
}

function addCourse() {
    const course = {
        title: titleInput.value,
        type: typeInput.value,
        description: descriptionInput.value,
        teacher: teacherInput.value
    };

    form.reset();
    
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    };
    request(options).then(() => loadCourses());
}

function createCourse(course) {
    const containerElement = document.createElement('div');
    containerElement.setAttribute('class', 'container');
    containerElement.id = course._id;
    const title = document.createElement('h2');
    title.textContent = course.title;
    const teacher = document.createElement('h3');
    teacher.textContent = course.teacher;
    const type = document.createElement('h3');
    type.textContent = course.type;
    const description = document.createElement('h4');
    description.textContent = course.description;
    const editBtn = document.createElement('button');
    editBtn.setAttribute('class', 'edit-btn');
    editBtn.textContent = 'Edit Course';
    editBtn.addEventListener('click', loadEdit);
    const finishBtn = document.createElement('button');
    finishBtn.setAttribute('class', 'finish-btn');
    finishBtn.textContent = 'Finish Course';
    finishBtn.addEventListener('click', finishCourse);

    containerElement.appendChild(title);
    containerElement.appendChild(teacher);
    containerElement.appendChild(type);
    containerElement.appendChild(description);
    containerElement.appendChild(editBtn);
    containerElement.appendChild(finishBtn);

    return containerElement;
}

function loadEdit(e) {
    const id = e.target.parentNode.id;
    const courseData = e.target.parentElement.children;

    titleInput.className = id;
    titleInput.value = courseData[0].textContent;
    typeInput.value = courseData[2].textContent;
    descriptionInput.value = courseData[3].textContent;
    teacherInput.value = courseData[1].textContent;

    addCourseBtn.setAttribute('disabled', 'disabled');
    editCourseBtn.removeAttribute('disabled');
    e.target.parentNode.remove();
}

function editCourse() {
    const course = {
        title: titleInput.value,
        type: typeInput.value,
        description: descriptionInput.value,
        teacher: teacherInput.value,
        _id: titleInput.className
    };

    form.reset();
    editCourseBtn.setAttribute('disabled', 'disabled');
    addCourseBtn.removeAttribute('disabled');

    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(course)
    }; 
        
    request(options, course._id).then(() => loadCourses());        
}

function finishCourse(e) {
    const id = e.target.parentNode.id;

    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        }
    };

    request(options, id).then(() => loadCourses());        
}

function request(options, id) {
    try {
        const url = id ? `${baseUrl}/${id}` : baseUrl;
        return fetch(url, options).then((res) => res.json());
    } catch (error) {
        throw error;
    }
}

attachEvents();