function piccolo(input) {
    let parkingLot = new Map();

    input.map(x => {
        let [direction, number] = x.split(', ');
        parkingLot.set(number, direction);
    });

    let parkingLotArr = [...parkingLot].filter(x => x[1] == 'IN');

    parkingLotArr = parkingLotArr.length > 0 ?
        parkingLotArr.sort((a, b) => a[0].localeCompare(b[0]))
            .map(x => console.log(x[0])) :

        console.log('Parking Lot is Empty');
}

piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU']
);