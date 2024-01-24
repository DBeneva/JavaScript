const { expect } = require('chai');
const onlineStore = require('./onlineStore');

describe("Tests Online Store", function () {
    
    describe("isProductAvailable", function () {
        it("Product is available", function () {
            expect(onlineStore.isProductAvailable('a', 1)).to.equal(`Great! a is available for purchase.`);
        });

        it("Product is not available", function () {
            expect(onlineStore.isProductAvailable('a', 0)).to.equal(`Sorry, a is currently out of stock.`);
        });

        it("Product is not available (negative quantity)", function () {
            expect(onlineStore.isProductAvailable('a', -1)).to.equal(`Sorry, a is currently out of stock.`);
        });

        it("First parameter number", function () {
            expect(() => onlineStore.isProductAvailable(1, 1)).to.throw('Invalid input.');
        });

        it("First parameter boolean", function () {
            expect(() => onlineStore.isProductAvailable(true, 1)).to.throw('Invalid input.');
        });

        it("First parameter array", function () {
            expect(() => onlineStore.isProductAvailable(['a'], 1)).to.throw('Invalid input.');
        });

        it("First parameter object", function () {
            expect(() => onlineStore.isProductAvailable({ a: 1}, 1)).to.throw('Invalid input.');
        });

        it("Second parameter string", function () {
            expect(() => onlineStore.isProductAvailable('a', '1')).to.throw('Invalid input.');
        });

        it("Second parameter boolean", function () {
            expect(() => onlineStore.isProductAvailable('a', true)).to.throw('Invalid input.');
        });

        it("Second parameter array", function () {
            expect(() => onlineStore.isProductAvailable('a', [1])).to.throw('Invalid input.');
        });

        it("Second parameter object", function () {
            expect(() => onlineStore.isProductAvailable('a', { a: 1 })).to.throw('Invalid input.');
        });
    });

    describe("canAffordProduct", function () {
        it("Cannot afford product", function () {
            expect(onlineStore.canAffordProduct(2, 1)).to.equal('You don\'t have sufficient funds to buy this product.');
        });

        it("Can afford product", function () {
            expect(onlineStore.canAffordProduct(1, 2)).to.equal('Product purchased. Your remaining balance is $1.');
        });

        it("First parameter string", function () {
            expect(() => onlineStore.canAffordProduct('1', 2)).to.throw('Invalid input.');
        });

        it("First parameter array", function () {
            expect(() => onlineStore.canAffordProduct([1], 2)).to.throw('Invalid input.');
        });

        it("First parameter boolean", function () {
            expect(() => onlineStore.canAffordProduct(true, 2)).to.throw('Invalid input.');
        });

        it("First parameter object", function () {
            expect(() => onlineStore.canAffordProduct({ a: 1 }, 2)).to.throw('Invalid input.');
        });

        it("Second parameter string", function () {
            expect(() => onlineStore.canAffordProduct(1, '2')).to.throw('Invalid input.');
        });

        it("Second parameter array", function () {
            expect(() => onlineStore.canAffordProduct(1, [2])).to.throw('Invalid input.');
        });

        it("Second parameter boolean", function () {
            expect(() => onlineStore.canAffordProduct(1, true)).to.throw('Invalid input.');
        });

        it("Second parameter object", function () {
            expect(() => onlineStore.canAffordProduct(1, { a: 1 })).to.throw('Invalid input.');
        });
    });

    describe("getRecommendedProducts", function () {
        it("One recommendation available", function () {
            expect(onlineStore.getRecommendedProducts([{ name: 'a', category: 'b'}, { name: 'b', category: 'a'}], 'a')).to.equal('Recommended products in the a category: b');
        });

        it("Several recommendations available", function () {
            expect(onlineStore.getRecommendedProducts([{ name: 'b', category: 'a'}, { name: 'c', category: 'a'}], 'a')).to.equal('Recommended products in the a category: b, c');
        });

        it("Recommendations not available", function () {
            expect(onlineStore.getRecommendedProducts([{ name: 'a', category: 'b'}], 'a')).to.equal('Sorry, we currently have no recommended products in the a category.');
        });

        it("First parameter object", function () {
            expect(() => onlineStore.getRecommendedProducts({ name: 'a', category: 'b'}, 'a')).to.throw('Invalid input.');
        });

        it("First parameter string", function () {
            expect(() => onlineStore.getRecommendedProducts("[{ name: 'a', category: 'b'}]", 'a')).to.throw('Invalid input.');
        });

        it("First parameter number", function () {
            expect(() => onlineStore.getRecommendedProducts(1, 'a')).to.throw('Invalid input.');
        });

        it("First parameter boolean", function () {
            expect(() => onlineStore.getRecommendedProducts(true, 'a')).to.throw('Invalid input.');
        });

        it("Second parameter number", function () {
            expect(() => onlineStore.getRecommendedProducts([{ name: 'a', category: 'b'}, { name: 'b', category: 'a'}], 1)).to.throw('Invalid input.');
        });

        it("Second parameter boolean", function () {
            expect(() => onlineStore.getRecommendedProducts([{ name: 'a', category: 'b'}, { name: 'b', category: 'a'}], true)).to.throw('Invalid input.');
        });

        it("Second parameter array", function () {
            expect(() => onlineStore.getRecommendedProducts([{ name: 'a', category: 'b'}, { name: 'b', category: 'a'}], [])).to.throw('Invalid input.');
        });

        it("Second parameter object", function () {
            expect(() => onlineStore.getRecommendedProducts([{ name: 'a', category: 'b'}, { name: 'b', category: 'a'}], { category: 'b'})).to.throw('Invalid input.');
        });
    });
});