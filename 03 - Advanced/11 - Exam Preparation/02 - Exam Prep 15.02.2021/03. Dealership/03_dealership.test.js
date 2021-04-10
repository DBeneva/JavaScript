const dealership = require('./03_dealership');
const { expect } = require('chai');

describe('dealership', () => {
    describe('newCarCost', () => {
        it('returns car price after discount', () => {
            expect(dealership.newCarCost('Audi A4 B8', 30000)).to.be.equal(15000);
        });

        it('returns car price without discount', () => {
            expect(dealership.newCarCost('a', 30000)).to.be.equal(30000);
        });

        it('returns undefined for missing second argument', () => {
            expect(dealership.newCarCost(15)).to.be.undefined;
        });
    })

    describe('carEquipment', () => {
        it('returns selected single extra', () => {
            expect(dealership.carEquipment(['a'], [0])).to.deep.equal(['a']);
        });

        it('returns selected multiple extras', () => {
            expect(dealership.carEquipment(['a', 'b', 'c'], [0, 2])).to.deep.equal(['a', 'c']);
        });
    });
    
    describe('euroCategory', () => {
        it('discount for category > 4', () => {
            expect(dealership.euroCategory(5)).to.equal(`We have added 5% discount to the final price: ${15000 - (15000 * 0.05)}.`);
        });

        it('discount for category = 4', () => {
            expect(dealership.euroCategory(4)).to.equal(`We have added 5% discount to the final price: ${15000 - (15000 * 0.05)}.`);
        });

        it('no discount for category < 4', () => {
            expect(dealership.euroCategory(3)).to.equal('Your euro category is low, so there is no discount from the final price!');
        });
    });
});