function clock() {
   for (let hours = 0; hours <= 23; hours++) {
       for (let minutes = 0; minutes <= 59; minutes++) {
           let outputLine = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`; 
           console.log(outputLine);
       }
   } 
}

clock();