const { expect } = require('chai');
const petAdoptionAgency = require('./petAdoptionAgency');

describe("Tests", function () {
    describe("isPetAvailable", function () {
        it("returns correct message if no pets are available", function () {
            expect(petAdoptionAgency.isPetAvailable('cat', 0, true)).to.equal('Sorry, there are no cat(s) available for adoption at the agency.');
        });

        it("returns correct message if there are available vaccinated pets", function () {
            expect(petAdoptionAgency.isPetAvailable('cat', 1, true)).to.equal('Great! We have 1 vaccinated cat(s) available for adoption at the agency.');
        });

        it("returns correct message if there are available non-vaccinated pets", function () {
            expect(petAdoptionAgency.isPetAvailable('cat', 1, false)).to.equal('Great! We have 1 cat(s) available for adoption, but they need vaccination.');
        });

        it("throws an error if pet is not a string", function () {
            expect(() => petAdoptionAgency.isPetAvailable(1, 1, false)).to.throw('Invalid input');
        });

        it("throws an error if availableCount is not a number", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', '1', false)).to.throw('Invalid input');
        });

        it("throws an error if vaccinated is not a boolean", function () {
            expect(() => petAdoptionAgency.isPetAvailable('cat', 1, 'false')).to.throw('Invalid input');
        });
    });

    describe("getRecommendedPets", function () {
        const petList = [
            { name: 'Jim', traits: 'obedient' },
            { name: 'Ben', traits: 'mature, obedient' }
        ];

        it("returns a list of pet names when there is at least one match", function () {
            expect(petAdoptionAgency.getRecommendedPets(petList, 'obedient')).to.equal('Recommended pets with the desired traits (obedient): Jim');
        });

        it("returns correct message when there is no match", function () {
            expect(petAdoptionAgency.getRecommendedPets(petList, 'funny')).to.equal('Sorry, we currently have no recommended pets with the desired traits: funny.');
        });

        it("throws an error if petList is not an array", function () {
            expect(() => petAdoptionAgency.getRecommendedPets({ name: 'Jim', traits: 'obedient' }, 'obedient')).to.throw('Invalid input');
        });

        it("throws an error if desiredTraits is not a string", function () {
            expect(() => petAdoptionAgency.getRecommendedPets(petList, ['obedient', 'funny'])).to.throw('Invalid input');
        });
    });

    describe("adoptPet", function () {
        it("returns correct message if the input is valid", function () {
            expect(petAdoptionAgency.adoptPet('cat', 'John')).to.equal('Congratulations, John! You have adopted cat from the agency. Enjoy your time with your new furry friend!');
        });

        it("throws an error if pet is not a string", function () {
            expect(() => petAdoptionAgency.adoptPet({ name: 'cat' }, 'John')).to.throw('Invalid input');
        });

        it("throws an error if adopterName is not a string", function () {
            expect(() => petAdoptionAgency.adoptPet('cat', { adopterName: 'John' })).to.throw('Invalid input');
        });
    });
});