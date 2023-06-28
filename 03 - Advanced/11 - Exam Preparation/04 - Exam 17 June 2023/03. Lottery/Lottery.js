const lottery = {
 buyLotteryTicket(ticketPrice,ticketCount,buy){
    if(buy == false) {
        throw new Error("Unable to buy lottery ticket!");
    }else{
        if(ticketPrice <= 0 || ticketCount < 1 ||
         typeof ticketPrice !== "number" || typeof ticketCount !== "number"){
            throw new Error("Invalid input!");
        }else{
            let totalPrice = ticketPrice * ticketCount;
            return `You bought ${ticketCount} tickets for ${totalPrice}$.`
        }
    }
},
 checkTicket(ticketNumbers,luckyNumbers) {
    if (!Array.isArray(ticketNumbers) || !Array.isArray(luckyNumbers) ||
     ticketNumbers.length != 6 || luckyNumbers.length != 6) {
        throw new Error("Invalid input!");
      }
      let winningNumbers = 0;
        for (let i = 0; i < ticketNumbers.length; i++) {
            for (let j = 0; j < luckyNumbers.length; j++) {
                if (ticketNumbers[i] === luckyNumbers[j]) {
                    winningNumbers++;
      }
    }
  }
  if(winningNumbers >= 3 && winningNumbers < 6){
    return "Congratulations you win, check your reward!";
  }else if(winningNumbers = 6){
    return "You win the JACKPOT!!!";
  }
},
secondChance(ticketID, secondChanceWinningIDs) {
   if(typeof ticketID !== "number" || !Array.isArray(secondChanceWinningIDs)){
    throw new Error("Invalid input!");
   }
   if (secondChanceWinningIDs.includes(ticketID)) {
    return "You win our second chance price!";
  } else {
    return "Sorry, your ticket doesn't win!"
  }
}
}

module.exports = lottery;