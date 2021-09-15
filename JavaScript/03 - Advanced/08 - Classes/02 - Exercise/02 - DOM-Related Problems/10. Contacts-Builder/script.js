class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
        this.article = this._makeArticle();
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        let titleEl = this.article.querySelector('.title');

        if (this._online == true) {
            titleEl.classList.add('online');
        } else {
            titleEl.classList.remove('online');
        }
    }

    _makeArticle() {
        let button = el('button');
        button.innerHTML = '&#8505;';
        button.addEventListener('click', () => {
            divInfo.style.display = divInfo.style.display == 'block' ? 'none' : 'block';
        });
        
        let divTitle = el('div');
        divTitle.innerHTML = `${this.firstName} ${this.lastName}`;
        divTitle.classList.add('title');
        divTitle.appendChild(button);

        let span1 = el('span');
        span1.innerHTML = `&phone; ${this.phone}`;
        let span2 = el('span');
        span2.innerHTML = `&#9993; ${this.email}`;

        let divInfo = el('div', span1, span2);
        divInfo.classList.add('info');    
        divInfo.style.display = 'none';
        
        let article = el('article', divTitle, divInfo);
        return article;

        function el(type, ...content) {
            let element = document.createElement(type);
    
            content.forEach(e => {
                if (typeof e == 'string' || typeof e == 'number') {
                    let node = document.createTextNode(e);
                    element.appendChild(node);
                } else {
                    element.appendChild(e);
                }
            });
    
            return element;
        }
    }

    render(id) {        
        document.getElementById(id).appendChild(this.article);
    }
}

let contacts = [
    new Contact("Ivan", "Ivanov", "0888 123 456", "i.ivanov@gmail.com"),
    new Contact("Maria", "Petrova", "0899 987 654", "mar4eto@abv.bg"),
    new Contact("Jordan", "Kirov", "0988 456 789", "jordk@gmail.com")
];
contacts.forEach(c => c.render('main'));

contacts[0].online = true;
// After 1 second, change the online status to true
setTimeout(() => contacts[1].online = true, 2000);