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
        const winner = players[game.win];
        const losers = players.filter((player, index) => {
            return index !== game.win;
        });

        for(let item = 0; item < players.length; item++) {
            const player = players[item];
            payout[player] = 0.00;
        }

        for(let item = 0; item < losers.length; item++) {
            const loser = losers[item];
            const points = game.points[loser];

            if(points < 300) {
                payout[winner] += (300 - points) / 100;
                payout[loser] -= (300 - points) / 100;
            }
        }

        return payout;
    }
};
