function bookShelf(input) {
    let shelves = new Map();
    let ids = [];

    input.forEach(x => {
        if (x.includes('->')) {
            let [id, genre] = x.split(' -> ');

            if (!ids.includes(id)) {
                shelves.set(genre, new Map([['id', id], ['books', []]]));
                ids.push(id);
            }
        } else if (x.includes(':')) {
            let [book, genre] = x.split(', ');

            if (shelves.has(genre)) {
                shelves.get(genre).get('books').push(book);
            }
        }
    });

    [...shelves]
        .sort((a, b) => b[1].get('books').length - a[1].get('books').length)
        .map(shelf => {
            console.log(`${shelf[1].get('id')} ${shelf[0]}: ${shelf[1].get('books').length}`);

            shelf[1].get('books').forEach(book => {
                console.log(`--> ${book}`);
            });
        });
}

bookShelf([
    '1 -> history', '1 -> action',
    'Death in Time: Criss Bell, mystery',
    '2 -> mystery', '3 -> sci-fi',
    'Child of Silver: Bruce Rich, mystery',
    'Hurting Secrets: Dustin Bolt, action',
    'Future of Dawn: Aiden Rose, sci-fi',
    'Lions and Rats: Gabe Roads, history',
    '2 -> romance',
    'Effect of the Void: Shay B, romance',
    'Losing Dreams: Gail Starr, sci-fi',
    'Name of Earth: Jo Bell, sci-fi',
    'Pilots of Stone: Brook Jay, history'
]);