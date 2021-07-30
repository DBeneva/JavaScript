function movie(input) {
    let budget = Number(input[0]);
    let numStaff = Number(input[1]);
    let priceCloth = Number(input[2]);
  
    let decorFee = budget * 0.1;
    let clothFee = numStaff * priceCloth;
  
    if (numStaff >= 150) {
      clothFee = clothFee * 0.9;
    }
  
    let expence = Math.abs(decorFee + clothFee);
  
    if (expence > budget) {
      console.log("Not enough money!");
      console.log(`Wingard needs ${(expence - budget).toFixed(2)} leva more.`);
    } else {
      console.log("Action!");
      console.log(
        `Wingard starts filming with ${(budget - expence).toFixed(2)} leva left.`
      );
    }
  }
  
  movie(["20000", "120", "55.5"]);
  movie(["15437.62", "186", "57.99"]);
  movie(["9587.88", "222", "55.68"]);
