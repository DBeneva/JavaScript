class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    get comments() {
        return this._comments;
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        }

        if (username == this.creator) {
            throw new Error("You can't like your own story!");
        }

        this._likes.push(username);
        return `${username} liked ${this.title}!`;
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error("You can't dislike this story!");
        } else {
            this._likes.splice(this._likes.indexOf(username), 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        const comment = this.comments.find(c => c.id == Number(id));

        if (id == undefined || !comment) {
            this.comments.push({ id: this.comments.length + 1, username, content, replies: [] });
            return `${username} commented on ${this.title}`;
        } else {
            comment.replies.push({ id: `${Number(id)}.${comment.replies.length + 1}`, username, content });
            return 'You replied successfully';
        }
    }

    toString(sortingType) {
        if (sortingType == 'asc') {
            this.comments
                .sort((a, b) => a.id - b.id)
                .forEach(c => {
                    c.replies.sort((a, b) => a.id - b.id);
                });
        } else if (sortingType == 'desc') {
            this.comments
                .sort((a, b) => b.id - a.id)
                .forEach(c => {
                    c.replies.sort((a, b) => b.id - a.id);
                });
        } else if (sortingType == 'username') {
            this.comments
                .sort((a, b) => a.username.localeCompare(b.username))
                .forEach(c => {
                    c.replies.sort((a, b) => a.username.localeCompare(b.username));
                });
        }

        let commentsFormatted = [];

        if (this.comments.length > 0) {
            this.comments
                .forEach(c => {
                    commentsFormatted.push(`-- ${c.id}. ${c.username}: ${c.content}`);
                    if (c.replies.length > 0) {
                        c.replies.forEach(r => {
                            commentsFormatted.push(`--- ${r.id}. ${r.username}: ${r.content}`);
                        });
                    }
                });
        }

        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        if (commentsFormatted.length > 0) {
            result.push('Comments:');
            result.push(commentsFormatted.join('\n'));
        }

        return result.join('\n');
    }
}

let art = new Story("My Story", 7);
console.log(art.toString());
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString());
