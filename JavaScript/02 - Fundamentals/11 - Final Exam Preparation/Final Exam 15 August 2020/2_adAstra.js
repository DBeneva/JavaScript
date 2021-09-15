function adAstra([string]) {
    let validItem = /([|#])(?<item>[A-Za-z\s]+)\1(?<date>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d+)\1/g;
    let food = [];
    let caloriesTotal = 0;

    while ((match = validItem.exec(string))) {
        food.push(`Item: ${match.groups.item}, Best before: ${match.groups.date}, Nutrition: ${match.groups.calories}`);
        caloriesTotal += Number(match.groups.calories);
    }

    let days = Math.trunc(caloriesTotal / 2000);

    console.log(`You have food to last you for: ${days} days!`);
    food.map(item => console.log(item));
}

adAstra([
    '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|'
    ]    
    );