function e(type, attributes, ...content) {
    let element = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.slice(0, 2) == 'on') {
            element.addEventListener(attr.slice(2).toLocaleLowerCase(), value);
        } else {
            element[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(c), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            element.appendChild(node);
        } else {
            element.appendChild(e);
        } 
    });

    return element;
}