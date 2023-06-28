const lottery = require('../Lottery');
const { assert } = require('chai');


describe('Tests', () => {
	describe('buyLotteryTicket', () => {
		it('Test with invalid ticketPrice', () => {
			assert.throw(
				() => lottery.buyLotteryTicket('invalid', 10, true),
				'Invalid input!',
			);
		});

		it('Test with invalid ticketCount', () => {
			assert.throw(
				() => lottery.buyLotteryTicket(10, 'invalid', true),
				'Invalid input!',
			);
		});

		it('Test with invalid buy', () => {
			assert.throw(
				() => lottery.buyLotteryTicket(10, 10, 'invalid'),
				'Invalid input!',
			);
		});

		it('Test with buy = false', () => {
			assert.throw(
				() => lottery.buyLotteryTicket(10, 10, false),
				'Unable to buy lottery ticket!',
			);
		});

		it('Test with ticketPrice = 0', () => {
			assert.throw(
				() => lottery.buyLotteryTicket(0, 10, true),
				'Invalid input!',
			);
		});

		it('Test with ticketPrice < 0', () => {
			assert.throw(
				() => lottery.buyLotteryTicket(-1, 10, true),
				'Invalid input!',
			);
		});

		it('Test with ticketCount < 1', () => {
			assert.throw(
				() => lottery.buyLotteryTicket(10, 0, true),
				'Invalid input!',
			);
		});

		it('Test with valid input', () => {
			assert.equal(
				lottery.buyLotteryTicket(10, 10, true),
				'You bought 10 tickets for 100$.',
			);
		});
	});

	describe('checkTicket', () => {
		it('Test with invalid ticketNumbers', () => {
			assert.throw(
				() => lottery.checkTicket('invalid', [1, 2, 3, 4, 5, 6]),
				'Invalid input!',
			);
		});

		describe('Test with invalid luckyNumbers', () => {
			assert.throw(
				() => lottery.checkTicket([1, 2, 3, 4, 5, 6], 'invalid'),
				'Invalid input!',
			);
		});

		it('Test with invalid ticketNumbers length < 6', () => {
			assert.throw(
				() => lottery.checkTicket([1, 2, 3, 4, 5], [1, 2, 3, 4, 5, 6]),
				'Invalid input!',
			);
		});

		it('Test with invalid luckyNumbers length < 6', () => {
			assert.throw(
				() => lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5]),
				'Invalid input!',
			);
		});

		it('Test with valid input - 3 winning numbers', () => {
			assert.equal(
				lottery.checkTicket([1, 2, 3, 40, 50, 60], [1, 2, 3, 4, 5, 6]),
				'Congratulations you win, check your reward!',
			);
		});

		it('Test with valid input - 4 winning numbers', () => {
			assert.equal(
				lottery.checkTicket([1, 2, 3, 4, 50, 60], [1, 2, 3, 4, 5, 6]),
				'Congratulations you win, check your reward!',
			);
		});

		it('Test with valid input - 5 winning numbers', () => {
			assert.equal(
				lottery.checkTicket([1, 2, 3, 4, 5, 60], [1, 2, 3, 4, 5, 6]),
				'Congratulations you win, check your reward!',
			);
		});

		it('Test with valid input - 6 winning numbers', () => {
			assert.equal(
				lottery.checkTicket([1, 2, 3, 4, 5, 6], [1, 2, 3, 4, 5, 6]),
				'You win the JACKPOT!!!',
			);
		});
	});

	describe('secondChance', () => {
		it('Test with invalid ticketID', () => {
			assert.throw(
				() => lottery.secondChance('invalid', [1, 2, 3, 4, 5, 6]),
				'Invalid input!',
			);
		});

		it('Test with invalid secondChanceWinningIDs', () => {
			assert.throw(() => lottery.secondChance(10, 'invalid'), 'Invalid input!');
		});

		it('Test with match', () => {
			assert.equal(
				lottery.secondChance(6, [1, 2, 3, 4, 5, 6]),
				'You win our second chance prize!',
			);
		});

		it('Test without match', () => {
			assert.equal(
				lottery.secondChance(10, [1, 2, 3, 4, 5, 6]),
				"Sorry, your ticket didn't win!",
			);
		});
	});
});