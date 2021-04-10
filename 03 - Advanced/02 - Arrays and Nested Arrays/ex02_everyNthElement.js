function everyNthElement(array, n) {
    return array.filter((x, i) => i % n == 0);
}

everyNthElement(['5', 
'20', 
'31', 
'4', 
'20'], 
2
);

everyNthElement(['dsa',
'asd', 
'test', 
'tset'], 
2
);