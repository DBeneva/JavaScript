function oldBooks(input) {
    let favoriteBook = input[0];
    let numberOfBooks = Number(input[1]);
    let found = false;
    let checkedBooks = 0;

    while (checkedBooks <= numberOfBooks) {
        let currentBook = input[checkedBooks + 2];
        
        if (currentBook == favoriteBook) {
            found = true;
            break;
        }
        
        checkedBooks++;
    }

    if (found) {
        console.log(`You checked ${checkedBooks} books and found it.`);
    } else {
        console.log(`The book you search is not here!`);
        console.log(`You checked ${numberOfBooks} books.`);
    }
}

oldBooks(['The Spot', 4, 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify']);