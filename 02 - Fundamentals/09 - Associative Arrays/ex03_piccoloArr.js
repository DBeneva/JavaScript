function piccolo(input) {
    let parkingLot = [];

    input.map(x => {
        let [direction, number] = x.split(', ');
        inOrOut(parkingLot, direction, number);
    });

    parkingLot = parkingLot.length > 0 ?
        parkingLot.sort()
            .map(x => console.log(x)) :
        
        console.log('Parking Lot is Empty');


    function inOrOut(array, direction, number) {
        switch (direction) {
            case 'IN': 
                if (!array.includes(number)) {
                    array.push(number);
                }
                break;
            
            case 'OUT':
                if (array.includes(number)) {
                    array.splice(array.indexOf(number), 1);
                }
                break;
        }

        return array;
    }
}

piccolo([
    'IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);