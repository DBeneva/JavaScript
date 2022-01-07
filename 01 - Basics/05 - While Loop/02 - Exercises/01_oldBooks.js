function oldBooks(input) {
    const favorite = input[0];
    const books = Number(input[1]);
    let found = false;

    for (let i = 2; i <= books, !found; i++) {
        if (input[i] == favorite) {
            console.log(`You checked ${i - 1} books and found it.`);
            found = true;
        }
    }

    if (!found) console.log(
        `The book you search is not here!` +
        `You checked ${input.length - 2} books.`
    );
}

oldBooks(['The Spot', 4, 'Hunger Games', 'The Spot', 'Harry Potter', 'Torronto', 'Spotify']);