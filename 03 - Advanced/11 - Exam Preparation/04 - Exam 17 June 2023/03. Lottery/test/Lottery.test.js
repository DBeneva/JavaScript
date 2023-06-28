const lottery = require('../Lottery');
const { expect } = require('chai');

describe("Tests", function() {
    describe("buyLotteryTicket", function() {
        it("returns confirmation for a successful purchase (1 ticket $1)", function() {
            expect(lottery.buyLotteryTicket(1, 1, true)).to.equal('You bought 1 tickets for 1$.');
        });

        it("returns confirmation for a successful purchase (1 ticket $2)", function() {
            expect(lottery.buyLotteryTicket(2, 1, true)).to.equal('You bought 1 tickets for 2$.');
        });

        it("returns confirmation for a successful purchase (2 tickets $1)", function() {
            expect(lottery.buyLotteryTicket(1, 2, true)).to.equal('You bought 2 tickets for 2$.');
        });

        it("throws an error in case of invalid first parameter (string)", function() {
            expect(lottery.buyLotteryTicket('a', 1, true)).to.throw('Invalid input!');
        });
        
        it("throws an error in case of invalid first parameter (negative)", function() {
            expect(lottery.buyLotteryTicket(-1, 1, true)).to.throw('Invalid input!');
        });

        it("throws an error in case of invalid second parameter (string)", function() {
            expect(lottery.buyLotteryTicket(1, 'a', true)).to.throw('Invalid input!');
        });
        
        it("throws an error in case of invalid second parameter (0)", function() {
            expect(lottery.buyLotteryTicket(1, 0, true)).to.throw('Invalid input!');
        });

        it("throws an error in case of invalid second parameter (negative)", function() {
            expect(lottery.buyLotteryTicket(1, -1, true)).to.throw('Invalid input!');
        });

        it("throws an error if the third parameter is false", function() {
            expect(lottery.buyLotteryTicket(1, 1, false)).to.throw('Unable to buy lottery ticket!');
        });

        it("throws an error if the third parameter is invalid (string)", function() {
            expect(lottery.buyLotteryTicket(1, 1, 'a')).to.throw('Unable to buy lottery ticket!');
        });
    });

    describe("checkTicket", function() {
        it("returns congratulations for 3 winning numbers", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = [1, 2, 3, 0, 10, 20];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.equal('Congratulations you win, check your reward!');
        });

        it("returns congratulations for 5 winning numbers", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = [1, 2, 3, 4, 5, 10];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.equal('Congratulations you win, check your reward!');
        });

        it("returns jackpot congratulations for 6 winning numbers", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = [1, 2, 3, 4, 5, 6];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.equal('You win the JACKPOT!!!');
        });

        it("throws an error in case of an invalid first parameter (number)", function() {
            const ticketNumbers = 1;
            const luckyNumbers = [1, 2, 3, 0, 10, 20];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid first parameter (string)", function() {
            const ticketNumbers = 'a';
            const luckyNumbers = [1, 2, 3, 0, 10, 20];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid first parameter (array of strings)", function() {
            const ticketNumbers = ['1', '2', '3', '4', '5', '6'];
            const luckyNumbers = [1, 2, 3, 0, 10, 20];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid first parameter (length 5)", function() {
            const ticketNumbers = [1, 2, 3, 4, 5];
            const luckyNumbers = [1, 2, 3, 0, 10, 20];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid first parameter (length 7)", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6, 7];
            const luckyNumbers = [1, 2, 3, 0, 10, 20];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid second parameter (number)", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = 1;

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid second parameter (string)", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = 'a';

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid second parameter (array of strings)", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = ['1', '2', '3', '4', '5', '6'];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid second parameter (length 5)", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = [1, 2, 3, 4, 5];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid second parameter (length 7)", function() {
            const ticketNumbers = [1, 2, 3, 4, 5, 6];
            const luckyNumbers = [1, 2, 3, 4, 5, 6, 7];

            expect(lottery.checkTicket(ticketNumbers, luckyNumbers)).to.throw('Invalid input!');
        });
    });

    describe("secondChance", function() {
        it("returns confirmation for winning in case of a match", function() {
            const secondChanceWinningIDs = [1, 2];

            expect(lottery.secondChance(1, secondChanceWinningIDs)).to.equal('You win our second chance price!');
        });

        it("returns confirmation in case there is no match", function() {
            const secondChanceWinningIDs = [1, 2];

            expect(lottery.secondChance(3, secondChanceWinningIDs)).to.equal('Sorry, your ticket doesn\'t win!');
        });

        it("throws an error in case of an invalid first parameter (string)", function() {
            const secondChanceWinningIDs = [1, 2];

            expect(lottery.secondChance('1', secondChanceWinningIDs)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid first parameter (array)", function() {
            const secondChanceWinningIDs = [1, 2];

            expect(lottery.secondChance([1], secondChanceWinningIDs)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid second parameter (string)", function() {
            const secondChanceWinningIDs = '1, 2';

            expect(lottery.secondChance(1, secondChanceWinningIDs)).to.throw('Invalid input!');
        });

        it("throws an error in case of an invalid second parameter (number)", function() {
            const secondChanceWinningIDs = 1;

            expect(lottery.secondChance([1], secondChanceWinningIDs)).to.throw('Invalid input!');
        });
    });
});