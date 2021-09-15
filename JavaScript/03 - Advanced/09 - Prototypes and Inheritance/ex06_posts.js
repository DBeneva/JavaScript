function posts() {
    class Post {
        constructor(title, content) {
            this.title = title;
            this.content = content;
        }

        toString() {
            return `Post: ${this.title}\nContent: ${this.content}`;
        }
    }

    class SocialMediaPost extends Post {
        constructor(title, content, likes, dislikes) {
            super(title, content);
            this.likes = likes;
            this.dislikes = dislikes;
            this.comments = [];
        }

        addComment(comment) {
            this.comments.push(comment);
        }

        toString() {
            let result = `Post: ${this.title}\nContent: ${this.content}\n`;
            result += `Rating: ${this.likes - this.dislikes}`;
            let comments = this.comments.length > 0 ?
                '\nComments:\n' + this.comments.map(c => ` * ${c}`).join('\n') :
                '';

            return result + comments;
        }
    }

    class BlogPost extends Post {
        constructor(title, content, views) {
            super(title, content);
            this.views = views;
        }

        view() {
            this.views += 1;
            return this;
        }

        toString() {
            let result = `Post: ${this.title}\nContent: ${this.content}\n`;
            result += `Views: ${this.views}`;
            return result;
        }
    }

    return { Post, SocialMediaPost, BlogPost };
}

let classes = posts();

let test = new classes.SocialMediaPost("TestTitle", "TestContent", 5, 10);

console.log(test.toString());