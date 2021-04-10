function oddEvenPosition(...input) {
    let n = Number(input[0]);
    let oddSum = 0;
    let oddMin = Number.POSITIVE_INFINITY;
    let oddMax = Number.NEGATIVE_INFINITY;
    let evenSum = 0;
    let evenMin = Number.POSITIVE_INFINITY;
    let evenMax = Number.NEGATIVE_INFINITY;

    for (let i = 1; i <= n; i++) {
        if (i % 2 == 1) {
            oddSum += Number(input[i]);
            
            if (Number(input[i]) < oddMin) {
                oddMin = Number(input[i]);
            }

            if (Number(input[i]) > oddMax) {
                oddMax = Number(input[i]);
            }
        } else {
            evenSum += Number(input[i]);
            
            if (Number(input[i]) < evenMin) {
                evenMin = Number(input[i]);
            }
            
            if (Number(input[i]) > evenMax) {
                evenMax = Number(input[i]);
            }
        }
    }

    if (oddMin == Number.POSITIVE_INFINITY) {
        oddMin = 'No';
    }

    if (evenMin == Number.POSITIVE_INFINITY) {
        evenMin = 'No';
    }
    
    if (oddMax == Number.NEGATIVE_INFINITY) {
        oddMax = 'No';
    }

    if (evenMax == Number.NEGATIVE_INFINITY) {
        evenMax = 'No';
    }

    console.log(`OddSum=${oddSum},`);
    console.log(`OddMin=${oddMin},`);
    console.log(`OddMax=${oddMax},`);
    console.log(`EvenSum=${evenSum},`);
    console.log(`EvenMin=${evenMin},`);
    console.log(`EvenMax=${evenMax}`);
}

oddEvenPosition(0);