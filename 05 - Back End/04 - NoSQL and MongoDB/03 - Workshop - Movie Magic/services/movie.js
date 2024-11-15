const CastMember = require('../models/CastMember');
const Movie = require('../models/Movie');
// const User = require('../models/User');

module.exports = {
    addMovie,
    getAllMovies,
    getMovieById,
    editMovie,
    deleteMovie,
    addCastMember,
    getAllCastMembers,
    getCastMemberById,
    attachCastMember
};

async function addMovie(movieData) {
    console.log('MOVIEDATA:', movieData);
    const movie = await new Movie(movieData);
    // const user = await User.findById(userData._id);
    // user.movies = user.movies ? [...user.movies, movie._id.toString()] : [movie._id.toString()];

    // movie.authorName = `${user.firstName} ${user.lastName}`;

    // return Promise.all([movie.save(), user.save()]);
    await movie.save();
    return movie;
}

async function getAllMovies(query) {
    let search = {};

    if (query && query.year) {
        search.title = { $regex: query.search || /.*/, $options: 'i' };
        search.genre = { $regex: query.genre || /.*/, $options: 'i' };
        search.year = Number(query.year);
    } else if (query && !query.year) {
        search.title = { $regex: query.search || /.*/, $options: 'i' };
        search.genre = { $regex: query.genre || /.*/, $options: 'i' };
    }
    
    console.log('SEARCH', search);

    const movies = await Movie.find(search).populate('cast').lean();
    return movies;
}

async function getMovieById(id) {
    return await Movie.findById(id).populate('cast').lean();
}

async function editMovie(id, movieData) {
    return await Movie.findByIdAndUpdate(id, movieData, { runValidators: true });    
}

// async function voteForMovie(movieID, userID) {
//     const movie = await Movie.findById(movieID);
//     movie.votes.push(userID);

//     const user = await User.findById(userID);
//     movie.votedEmails += movie.votedEmails ? `, ${user.email}` : user.email;

//     return movie.save();
// }

async function addCastMember(castMemberData) {
    const castMember = await new CastMember(castMemberData);
    // const user = await User.findById(userData._id);
    // user.movies = user.movies ? [...user.movies, movie._id.toString()] : [movie._id.toString()];

    // movie.authorName = `${user.firstName} ${user.lastName}`;

    // return Promise.all([movie.save(), user.save()]);
    await castMember.save();
    return castMember;
}

async function getAllCastMembers() {
    const castMembers = await CastMember.find().lean();
    return castMembers;
}

async function getCastMemberById(id) {
    return await CastMember.findById(id).populate('movie').lean();
}

async function attachCastMember(movieID, castMemberID) {
    const movie = await Movie.findById(movieID);
    const castMember = await CastMember.findById(castMemberID);
    movie.cast.push(castMemberID);
    castMember.movie = movie._id;

    console.log('MOVIE', movie);
    return Promise.all([movie.save(), castMember.save()]);
}

async function deleteMovie(id) {
    console.log(typeof id, id);
    return await Movie.findByIdAndRemove(id);
}