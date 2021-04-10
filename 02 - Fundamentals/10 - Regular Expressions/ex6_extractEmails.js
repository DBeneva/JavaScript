function extractEmails([input]) {
    let user = '(?<=\\s)[A-Za-z\\d]+([\\.\\-_][A-Za-z\\d]+)*';
    let host1 = '[A-Za-z\\d]+(\\-[A-Za-z\\d]+)*';
    let host2 = '(\\.[A-Za-z]+(\\-[A-Za-z]+)*)+\\b';
    let validEmail = user + '@' + host1 + host2;
    let output = input.match(new RegExp(validEmail, 'g')) ?
        console.log(input.match(new RegExp(validEmail, 'g')).join('\n')) : '';
}

extractEmails(['Many users @ SoftUni confuse email addresses. We @ Softuni.BG provide high-quality training @ home or @ class. –- steve.parker@softuni.de.', 'end']);