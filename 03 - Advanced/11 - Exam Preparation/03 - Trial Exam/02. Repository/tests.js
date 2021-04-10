const { Repository } = require('./solution.js');
const { expect } = require('chai');

describe('repository', () => {
    let properties = {
        name: "string",
        age: "number",
        birthday: "object"
    };

    let newRep = new Repository(properties);
    
    describe('without entities', () => {
        it('props', () => {
            expect(newRep.props).to.deep.equal(properties);
        });

        it('data', () => {
            expect(newRep.data).to.deep.equal(new Map());
        });

        it('count', () => {
            expect(newRep.count).to.equal(0);
        });
    });

    describe('add entity', () => {
         let entity = {
             name: "Pesho",
             age: 22,
             birthday: new Date(1998, 0, 7)
         };

         it('successfully add entity', () => {
             expect(newRep.add(entity)).to.equal(1);
         });

         it('throws error for invalid input', () => {
            expect(() => newRep.add('entity')).to.throw('Property name is missing from the entity!');
        });

        it('count', () => {            
            expect(newRep.count).to.equal(1);
        });

        it('id', () => {            
            expect(newRep.data.get('id')).to.equal(1);
        });
        
     });

    describe('', () => {
        it('', () => {            
            
        });
    });
});