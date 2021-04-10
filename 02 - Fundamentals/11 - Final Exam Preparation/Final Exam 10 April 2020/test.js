function test() {

    let cars = ['Audi', 'Fiat', 'BMW'];
    cars[cars.indexOf('Audi')] = cars.splice(cars.indexOf('BMW'), 1, 'Audi').join(''); 
    console.log(cars);
    let numbers = [3, -4, 290];
    console.log(Math.min.apply(null, [2, 5, 4, 7]));
}

test();