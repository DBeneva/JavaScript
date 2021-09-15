function comments(input) {
    let users = [];
    let articles = {};

    input.forEach(x => {
        if (x.includes('user')) {
            let user = x.split(' ')[1];
            users.push(user);
        } else if (x.includes('article')) {
            let article = x.split(' ')[1];
            articles[article] = {};
        } else if (x.includes('posts on')) {
            let [user, articleComment] = x.split(' posts on ');
            let [article, comment] = articleComment.split(': ');

            if (users.includes(user) && articles.hasOwnProperty(article)) {
                if (articles[article].hasOwnProperty(user)) {
                    articles[article][user].push(comment);
                } else {
                    articles[article][user] = [comment];
                }
            }
        }
    });

    Object.entries(articles)
        .sort((a, b) => countComments(b[1]) - countComments(a[1]))
        .map(([article, user]) => {
            console.log(`Comments on ${article}`);

            Object.entries(user)
                .sort((a, b) => a[0].localeCompare(b[0]))
                .map(([name, comments]) => {
                    if (comments.length > 1) {
                        comments.map(comment => {
                            console.log(`--- From user ${name}: ${comment.replace(', ', ' - ')}`);
                        });
                    } else {
                        console.log(`--- From user ${name}: ${comments[0].replace(', ', ' - ')}`);
                    }
                });
        });

    function countComments(object) {
        return Object.values(object).length;
    }
}

comments([
    'user aUser123',
    'someUser posts on someArticle: NoTitle, stupidComment',
    'article Books',
    'article Movies',
    'article Shopping',
    'user someUser',
    'user uSeR4',
    'user lastUser',
    'uSeR4 posts on Books: I like books, I do really like them',
    'uSeR4 posts on Movies: I also like movies, I really do',
    'someUser posts on Shopping: title, I go shopping every day',
    'someUser posts on Movies: Like, I also like movies very much'
]);