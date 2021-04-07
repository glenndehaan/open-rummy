/**
 * Export the money utils
 */
export default {
    /**
     * Calculate the payout per round win/loss
     *
     * @param players
     * @param game
     */
    calculateRounds(players, game) {
        const payout = {};

        for(let item = 0; item < players.length; item++) {
            const player = players[item];
            payout[player] = 0.00;
        }

        for(let item = 0; item < game.wins.length; item++) {
            const winner = players[game.wins[item]];
            const losers = players.filter((player, index) => {
                return index !== game.wins[item];
            });

            for(let i = 0; i < losers.length; i++) {
                const loser = losers[i];

                payout[winner] += 0.10;
                payout[loser] -= 0.10;
            }
        }

        return payout;
    },

    /**
     * Calculate the payout for the winners/losers
     *
     * @param players
     * @param game
     * @returns {{}}
     */
    calculateWin(players, game) {
        const payout = {};

        for(let item = 0; item < players.length; item++) {
            const player = players[item];
            payout[player] = 0.00;
        }

        const split = game.win.length > 1;

        if(!split) {
            const winner = players[game.win[0]];
            const losers = players.filter((player, index) => {
                return index !== game.win[0];
            });

            for (let item = 0; item < losers.length; item++) {
                const loser = losers[item];
                const points = game.points[loser];

                if (points < 300) {
                    payout[winner] += (300 - points) / 100;
                    payout[loser] -= (300 - points) / 100;
                }
            }
        } else {
            let winnersPayout = 0;
            const winners = game.win.map((e) => {
                return players[e];
            });
            const losers = players.filter((player) => {
                return !winners.includes(player);
            });

            for (let item = 0; item < losers.length; item++) {
                const loser = losers[item];
                const points = game.points[loser];

                if (points < 300) {
                    winnersPayout += (300 - points) / 100;
                    payout[loser] -= (300 - points) / 100;
                }
            }

            const payoutPerWinner = winnersPayout / winners.length;

            for (let item = 0; item < winners.length; item++) {
                const winner = winners[item];
                payout[winner] += payoutPerWinner;
            }
        }

        return payout;
    }
};
