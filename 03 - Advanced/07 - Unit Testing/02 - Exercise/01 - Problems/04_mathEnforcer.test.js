const { expect } = require('chai');
const mathEnforcer = require('./04_mathEnforcer');

describe('mathEnforcer', () => {
    describe('addFive', () => {
        it('returns + 5 for valid input', () => {
            expect(mathEnforcer.addFive(1)).to.be.equal(6);
        });
        
        it('returns + 5 for negative argument', () => {
            expect(mathEnforcer.addFive(-1)).to.be.equal(4);
        });

        it('returns + 5 for non-integer argument', () => {
            expect(mathEnforcer.addFive(1.7)).to.be.equal(6.7);
        });

        it('returns undefined for non-numeric argument', () => {
            expect(mathEnforcer.addFive('1')).to.be.undefined;
        });
    });

    describe('subtractTen', () => {
        it('returns - 10 for valid input', () => {
            expect(mathEnforcer.subtractTen(10)).to.be.equal(0);
        });
        
        it('returns - 10 for negative argument', () => {
            expect(mathEnforcer.subtractTen(-1)).to.be.equal(-11);
        });

        it('returns - 10 for non-integer argument', () => {
            expect(mathEnforcer.subtractTen(10.8)).to.be.equal(0.8000000000000007);
        });

        it('returns undefined for non-numeric argument', () => {
            expect(mathEnforcer.subtractTen('1')).to.be.undefined;
        });
    });

    describe('sum', () => {
        it('returns sum for valid input', () => {
            expect(mathEnforcer.sum(1, 2)).to.be.equal(3);
        });

        it('returns sum for negative first argument', () => {
            expect(mathEnforcer.sum(-1, 2)).to.be.equal(1);
        });

        it('returns sum for negative second argument', () => {
            expect(mathEnforcer.sum(1, -2)).to.be.equal(-1);
        });
        
        it('returns sum for non-integer first argument', () => {
            expect(mathEnforcer.sum(1.8, 1)).to.be.equal(2.8);
        });
        
        it('returns sum for non-integer second argument', () => {
            expect(mathEnforcer.sum(1, 1.8)).to.be.equal(2.8);
        });

        it('returns undefined for non-numeric first argument', () => {
            expect(mathEnforcer.sum('1', 2)).to.be.undefined;
        });
        
        it('returns undefined for non-numeric second argument', () => {
            expect(mathEnforcer.sum(1, '2')).to.be.undefined;
        });
    });
});