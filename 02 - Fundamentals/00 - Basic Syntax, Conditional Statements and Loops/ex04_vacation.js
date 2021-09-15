function vacation(people, groupType, weekday) {
    people = Number(people);
    let totalPrice = 0;

    if (groupType == 'Business' && people >= 100) {
        people -= 10;
    }

    switch(weekday) {
        case 'Friday':
            switch(groupType) {
                case 'Students': totalPrice += people * 8.45; break;
                case 'Business': totalPrice += people * 10.90; break;
                case 'Regular': totalPrice += people * 15; break;
            }
        break;

        case 'Saturday':
            switch(groupType) {
                case 'Students': totalPrice += people * 9.80; break;
                case 'Business': totalPrice += people * 15.60; break;
                case 'Regular': totalPrice += people * 20; break;
            }
        break;

        case 'Sunday':
            switch(groupType) {
                case 'Students': totalPrice += people * 10.46; break;
                case 'Business': totalPrice += people * 16; break;
                case 'Regular': totalPrice += people * 22.50; break;
            }
        break;
    }

    if (groupType == 'Students' && people >= 30) {
        totalPrice -= 0.15 * totalPrice;
    }

    if (groupType == 'Regular' && people >= 10 && people <= 20) {
        totalPrice -= 0.05 * totalPrice;
    }

    console.log(`Total price: ${totalPrice.toFixed(2)}`);
}

vacation('40', 'Regular', 'Saturday');