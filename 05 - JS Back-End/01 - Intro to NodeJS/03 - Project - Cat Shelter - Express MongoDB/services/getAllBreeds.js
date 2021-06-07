const { Breed } = require("../models/Breed");

module.exports = {
    async getAllBreeds() {
        console.log(Breed);
        return Breed.find({}).lean();
    }
};