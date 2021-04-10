function printingTriangle(input) {
    top(input);
    bottom(input);

    function top(input) {
        let num = Number(input);
    
        for (let row = 1; row <= num; row++) {
            let outputLine = '';
    
            for (let position = 1; position <= row; position++) {
                outputLine += position + ' ';
            }
    
            console.log(outputLine);
        }
    }

    function bottom(input) {
        let num = Number(input);
        
        for (let row = 1; row < num; row++) {
            let outputLine = '';
            
            for (let position = 1; position <= num - row; position++) {
                outputLine += position + ' ';
            }
            
            console.log(outputLine);
        }
    }
}

printingTriangle('4');