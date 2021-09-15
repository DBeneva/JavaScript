const { assert } = require('chai');
const PaymentPackage = require('./ex13_paymentPackage');

describe('PaymentPackage', () => {
    let instance = undefined;
    
    beforeEach(() => {
        instance = new PaymentPackage('Name', 100);
    });

    it('constructor', () => {
        assert.equal(instance._name, 'Name', 'name');
        assert.equal(instance._value, 100, 'value');
        assert.equal(instance._VAT, 20, 'VAT');
        assert.equal(instance._active, true, 'active');
    });

    it('name', () => {
        assert.equal(instance.name, 'Name');
        instance.name = 'Pesho';
        assert.equal(instance.name, 'Pesho');
        assert.throw(() => { instance.name = '' }, 'Name must be a non-empty string');
        assert.throw(() => { instance.name = 2 }, 'Name must be a non-empty string');
    });

    it('value', () => {
        assert.equal(instance.value, 100);
        instance.value = 40;
        assert.equal(instance.value, 40);
        instance.value = 0;
        assert.equal(instance.value, 0);
        assert.throw(() => { instance.value = -2 }, 'Value must be a non-negative number');
        assert.throw(() => { instance.value = '2' }, 'Value must be a non-negative number');
    });

    it('VAT', () => {
        assert.equal(instance.VAT, 20);
        instance.VAT = 40;
        assert.equal(instance.VAT, 40);
        assert.throw(() => { instance.VAT = -2 }, 'VAT must be a non-negative number');
        assert.throw(() => { instance.VAT = '2' }, 'VAT must be a non-negative number');
    });

    it('active', () => {
        assert.equal(instance.active, true);
        instance.active = false;
        assert.equal(instance.active, false);
        assert.throw(() => { instance.active = 'a' }, 'Active status must be a boolean');
        assert.throw(() => { instance.active = 0 }, 'Active status must be a boolean');
    });

    it('toString', () => {
        assert.equal(instance.toString(), 'Package: Name\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120');
        instance.active = false;
        assert.equal(instance.toString(), 'Package: Name (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 20%): 120');
        instance.VAT = 200;
        assert.equal(instance.toString(), 'Package: Name (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 200%): 300');
        instance.name = 'Gosho';
        assert.equal(instance.toString(), 'Package: Gosho (inactive)\n- Value (excl. VAT): 100\n- Value (VAT 200%): 300');
        instance.value = 2;
        assert.equal(instance.toString(), 'Package: Gosho (inactive)\n- Value (excl. VAT): 2\n- Value (VAT 200%): 6');
    });
});