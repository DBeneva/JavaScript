const { expect } = require('chai');
const numberOperations = require('./03_numberOperations');

describe('numberOperations', function () {
    describe('powNumber', () => {
        it('returns the power of the number', () => {
            expect(numberOperations.powNumber(2)).to.equal(4);
        });
    });

    describe('numberChecker', () => {
        it('num < 100', () => {
            expect(numberOperations.numberChecker(1)).to.equal('The number is lower than 100!');
        });

        it('num > 100', () => {
            expect(numberOperations.numberChecker(101)).to.equal('The number is greater or equal to 100!');
        });
        
        it('num = 100', () => {
            expect(numberOperations.numberChecker(100)).to.equal('The number is greater or equal to 100!');
        });
        
        it('1', () => {
            expect(numberOperations.numberChecker('1')).to.equal('The number is lower than 100!');
        });

        it('a', () => {
            expect(() => numberOperations.numberChecker('a')).to.throw('The input is not a number!');
        });
    });

    describe('sumArrays', () => {
        it('single element', () => {
            expect(numberOperations.sumArrays([1], [1])).to.deep.equal([2]);
        });

        it('multiple elements', () => {
            expect(numberOperations.sumArrays([1, 2, 3], [0, 1, 2])).to.deep.equal([1, 3, 5]);
        });

        it('arrays of different lengths', () => {
            expect(numberOperations.sumArrays([1, 2], [0, 1, 2])).to.deep.equal([1, 3, 2]);
        });
    });
});
