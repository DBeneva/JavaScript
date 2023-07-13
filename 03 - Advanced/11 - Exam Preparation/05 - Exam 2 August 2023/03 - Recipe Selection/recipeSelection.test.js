const { expect } = require('chai');
const recipeSelection = require('../recipeSelection');

describe("Tests", function() {
    describe("isTypeSuitable", function() {
        it("returns correct message for vegetarian dietary restriction", function() {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegetarian')).to.equal('This recipe is not suitable for vegetarians');
        });

        it("returns correct message for vegan dietary restriction (meat)", function() {
            expect(recipeSelection.isTypeSuitable('Meat', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it("returns correct message for vegan dietary restriction (dairy)", function() {
            expect(recipeSelection.isTypeSuitable('Dairy', 'Vegan')).to.equal('This recipe is not suitable for vegans');
        });

        it("returns correct message for other dietary restrictions", function() {
            expect(recipeSelection.isTypeSuitable('Meat', 'a')).to.equal('This recipe is suitable for your dietary restriction');
        });

        it("returns correct message for other dietary restrictions", function() {
            expect(recipeSelection.isTypeSuitable('Dairy', 'a')).to.equal('This recipe is suitable for your dietary restriction');
        });

        it("returns correct message for other dietary restrictions", function() {
            expect(recipeSelection.isTypeSuitable('a', 'Vegetarian')).to.equal('This recipe is suitable for your dietary restriction');
        });

        it("returns correct message for other dietary restrictions", function() {
            expect(recipeSelection.isTypeSuitable('a', 'Vegan')).to.equal('This recipe is suitable for your dietary restriction');
        });

        it("throws an error for an invalid recipe type (number)", function() {
            expect(() => { recipeSelection.isTypeSuitable(1, 'Vegan') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid recipe type (object)", function() {
            expect(() => { recipeSelection.isTypeSuitable({}, 'Vegan') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid recipe type (array)", function() {
            expect(() => { recipeSelection.isTypeSuitable(['Meat'], 'Vegan') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid recipe type (boolean)", function() {
            expect(() => { recipeSelection.isTypeSuitable(true, 'Vegan') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid dietary restriction (number)", function() {
            expect(() => { recipeSelection.isTypeSuitable('Meat', 1) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid dietary restriction (object)", function() {
            expect(() => { recipeSelection.isTypeSuitable('Meat', {}) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid dietary restriction (array)", function() {
            expect(() => { recipeSelection.isTypeSuitable('Meat', ['Vegan']) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid dietary restriction (boolean)", function() {
            expect(() => { recipeSelection.isTypeSuitable('Meat', true) }).to.throw('Invalid input');
        });
    });

    describe("isItAffordable", function() {
        it("returns correct message for negative budget", function() {
            expect(recipeSelection.isItAffordable(2, -1)).to.equal('You don\'t have enough budget to afford this recipe');
        });

        it("returns correct message for negative budget", function() {
            expect(recipeSelection.isItAffordable(2, 1)).to.equal('You don\'t have enough budget to afford this recipe');
        });

        it("returns correct message for positive budget", function() {
            expect(recipeSelection.isItAffordable(1, 2)).to.equal(`Recipe ingredients bought. You have 1$ left`);
        });

        it("throws an error for an invalid price (string)", function() {
            expect(() => { recipeSelection.isItAffordable('1', 1) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid price (object)", function() {
            expect(() => { recipeSelection.isItAffordable({}, 1) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid price (array)", function() {
            expect(() => { recipeSelection.isItAffordable([1], 1) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid price (boolean)", function() {
            expect(() => { recipeSelection.isItAffordable(true, 1) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid budget (string)", function() {
            expect(() => { recipeSelection.isItAffordable(1, '1') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid budget (object)", function() {
            expect(() => { recipeSelection.isItAffordable(1, {}) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid budget (array)", function() {
            expect(() => { recipeSelection.isItAffordable(1, [1]) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid budget (boolean)", function() {
            expect(() => { recipeSelection.isItAffordable(1, true) }).to.throw('Invalid input');
        });    
    });

    describe("getRecipesByCategory", function() {
        it("throws an error for an invalid recipes (string)", function() {
            expect(() => { recipeSelection.getRecipesByCategory('a', 'Meat') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid recipes (number)", function() {
            expect(() => { recipeSelection.getRecipesByCategory(1, 'Meat') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid recipes (object)", function() {
            expect(() => { recipeSelection.getRecipesByCategory({ title: 'a', category: 'a' }, 'Meat') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid recipes (boolean)", function() {
            expect(() => { recipeSelection.getRecipesByCategory(true, 'Meat') }).to.throw('Invalid input');
        });

        it("throws an error for an invalid category (array)", function() {
            expect(() => { recipeSelection.getRecipesByCategory([{ title: 'a', category: 'a' }], ['a']) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid category (number)", function() {
            expect(() => { recipeSelection.getRecipesByCategory([{ title: 'a', category: 'a' }], 1) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid category (object)", function() {
            expect(() => { recipeSelection.getRecipesByCategory([{ title: 'a', category: 'a' }], { category: 'Meat' }) }).to.throw('Invalid input');
        });

        it("throws an error for an invalid category (boolean)", function() {
            expect(() => { recipeSelection.getRecipesByCategory([{ title: 'a', category: 'a' }], true) }).to.throw('Invalid input');
        });

        it("returns a filtered array", function() {
            const recipes = [
                { title: "Spicy Tofu Stir-Fry", category: "Asian" },
                { title: "Chicken", category: "Meat" }
            ];

            expect(recipeSelection.getRecipesByCategory(recipes, 'Asian')).to.deep.equal(["Spicy Tofu Stir-Fry"]);
        });
    });    
});
