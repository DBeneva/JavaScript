class Movie {
    constructor(title, genre, director, year, imageURL, rating, description, id) {
        this.title = title;
        this.genre = genre;
        this.director = director;
        this.year = year;
        this.imageURL = imageURL;
        this.rating = rating;
        this.description = description;
        this.id = id;
    }
}

module.exports = Movie;