function GCD(first, second) {
    
    let divident = Math.max(first, second);
    let divisor = Math.min(first, second);
    let GCD = divident % divisor;

    while (GCD != 0) {
        divident = divisor;
        divisor = GCD;
        GCD = divident % divisor;
    }

    console.log(divisor);
}

GCD(2154, 458);