function schoolLibrary(input) {
    let bookShelf = input.shift().split('&');
    input = input.slice(0, input.indexOf('Done'));

    let actions = {
        Add(array, book) {
            if (!array.includes(book)) {
                array.unshift(book);
            }
        },
        Take(array, book) {
            if (array.includes(book)) {
                array.splice(array.indexOf(book), 1);
            }
        },
        Swap(array, book1, book2) {
            if (array.includes(book1) && array.includes(book2)) {
                let toBeSwapped = book1;
                array[array.indexOf(book2)] = toBeSwapped;
                array[array.indexOf(book1)] = book2;
            }
        },
        Insert(array, book) {
            array.push(book);
        },
        Check(array, index) {
            index = Number(index);
            
            if (array[index] != undefined) {
                console.log(array[index]);
            }
        }
    };

    while (input.length > 0) {
        let [command, bookOrIndex, book2] = input.shift().split(' | ');
        command = command.split(' ')[0];
        
        if (actions.hasOwnProperty(command)) {
            actions[command](bookShelf, bookOrIndex, book2);
        }
    }

    console.log(bookShelf.join(', '));
}

schoolLibrary([
    'Anna Karenina&Heart of Darkness&Catch-22&The Stranger',
    'Add Book | David Copperfield',
    'Add Book | One Thousand and One Nights',
    'Swap Books | One Thousand and One Nights | Catch-22',
    'Take Book | David Copperfield',
    'Insert Book | The Stories of Anton Chekhov',
    'Check Book | 17',
    'Done',
    ''
]);