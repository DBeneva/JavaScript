const { expect } = require('chai');
const isOddOrEven = require('./02_evenOrOdd')

describe('isOddOrEven', () => {
    it('return odd for valid input with an odd length', () => {
        expect(isOddOrEven('a')).to.equal('odd');
    });

    it('return even for valid input with an even length', () => {
        expect(isOddOrEven('aa')).to.equal('even');
    });

    it('return undefined for invalid input', () => {
        expect(isOddOrEven(3)).to.be.undefined;
    });
});