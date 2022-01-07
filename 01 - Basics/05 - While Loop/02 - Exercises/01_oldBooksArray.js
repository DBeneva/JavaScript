function oldBooks(input) {
    const favorite = input.shift();
    
    console.log(
        input.includes(favorite)
            ? `You checked ${input.indexOf(favorite)} books and found it.`
            : `The book you search is not here!\n` +
                `You checked ${input.length - 2} books.`
    );
}

oldBooks(['The Spot', 4, 'Hunger Games', 'Harry Potter', 'Torronto', 'Spotify']);