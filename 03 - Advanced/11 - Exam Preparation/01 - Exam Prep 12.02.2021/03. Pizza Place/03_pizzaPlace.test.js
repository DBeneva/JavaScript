const pizzUni = require('./03_pizzaPlace')
const { expect } = require('chai');

describe('Tests', () => {
    describe('make an order', () => {
        it('successful full order', () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Margarita', orderedDrink: 'water' })).to.equal('You just ordered Margarita and water.');
        });

        it('no drink ordered', () => {
            expect(pizzUni.makeAnOrder({ orderedPizza: 'Margarita' })).to.equal('You just ordered Margarita');
        });

        it('no pizza ordered', () => {
            expect(() => pizzUni.makeAnOrder({ orderedDrink: 'water' })).to.throw('You must order at least 1 Pizza to finish the order.');
        });

        it('invalid input', () => {
            expect(() => pizzUni.makeAnOrder('Margarita')).to.throw('You must order at least 1 Pizza to finish the order.');
        });
    });

    describe('get remaining work', () => {
        it('get remaining pizzas', () => {
            const pizzas = [{ pizzaName: 'Margarita', status: 'ready' }, { pizzaName: 'Pepperoni', status: 'preparing' }, { pizzaName: '4 Stagioni', status: 'preparing' }];
            expect(pizzUni.getRemainingWork(pizzas)).to.equal('The following pizzas are still preparing: Pepperoni, 4 Stagioni.');
        });

        it('no remaining pizzas', () => {
            const pizzas = [{ pizzaName: 'Margarita', status: 'ready' }, { pizzaName: 'Pepperoni', status: 'ready' }, { pizzaName: '4 Stagioni', status: 'ready' }];
            expect(pizzUni.getRemainingWork(pizzas)).to.equal('All orders are complete!');
        });
    });

    describe('order type', () => {
        it('returns total sum for carry out', () => {
            expect(pizzUni.orderType(100, 'Carry Out')).to.equal(90);
        });

        it('returns total sum for delivery', () => {
            expect(pizzUni.orderType(100, 'Delivery')).to.equal(100);
        });
        
        it('returns undefined for invalid order type', () => {
            expect(pizzUni.orderType(100, 'CarryOut')).to.be.undefined;
        });
    });
});