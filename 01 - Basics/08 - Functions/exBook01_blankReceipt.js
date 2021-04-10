function blankReceipt() {
    top();
    middle();
    bottom();
    
    function top() {
        console.log('CASH RECEIPT');
        console.log('------------------------------');
    }

    function middle() {
        console.log('Charged to____________________');
        console.log('Received by___________________');
    }

    function bottom() {
        console.log('------------------------------');
        console.log('(c) SoftUni');
    }
}

blankReceipt();