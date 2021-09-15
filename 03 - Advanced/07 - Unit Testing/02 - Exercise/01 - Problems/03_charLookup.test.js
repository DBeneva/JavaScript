const { expect } = require('chai');
const lookupChar = require('./03_charLookup');

describe('lookupChar', () => {
    it('return a for (a, 0)', () => {
        expect(lookupChar('a', 0)).to.equal('a');
    });
    
    it('return b for (ab, 1)', () => {
        expect(lookupChar('ab', 1)).to.equal('b');
    });

    it('return undefined for non-string first argument', () => {
        expect(lookupChar(0, 0)).to.be.undefined;
    });

    it('return undefined for non-integer second argument', () => {
        expect(lookupChar('a', 0.5)).to.be.undefined;
    });
    
    it('return Incorrect index for negative index', () => {
        expect(lookupChar('a', -1)).to.equal('Incorrect index');
    });

    it('return Incorrect index for index >= length of string', () => {
        expect(lookupChar('a', 1)).to.equal('Incorrect index');
    });
});