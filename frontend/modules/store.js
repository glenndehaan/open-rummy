import createUnistore from 'unistore';
import devtools from 'unistore/devtools';

/**
 * Exports the store with the default state
 *
 * @return {any}
 */
const createStore = () => {
    const initialState = {
        players: [],
        game: {
            started: false,
            finished: false,
            points: {},
            wins: [],
            win: -1,
            turn: -1
        },
        route: "intro"
    };

    return process.env.NODE_ENV === 'production' ? createUnistore(initialState) : devtools(createUnistore(initialState));
};

/**
 * All action for mutating the store
 *
 * @return {*}
 */
const actions = () => {
    return {
        updateRouter(state, payload) {
            return {
                route: payload
            };
        },
        setPlayers(state, payload) {
            return {
                players: payload
            };
        },
        startGame(state) {
            const points = {};

            for(let item = 0; item < state.players.length; item++) {
                const player = state.players[item];
                points[player] = 0;
            }

            return {
                game: {
                    started: true,
                    finished: false,
                    points,
                    wins: [],
                    win: -1,
                    turn: 0
                }
            };
        },
        addPoints(state, payload) {
            const newState = {
                game: {
                    ...state.game
                }
            };

            newState.game.points[state.players[state.game.turn]] += parseInt(payload);

            return newState;
        },
        nextPlayer(state) {
            return {
                game: {
                    ...state.game,
                    turn: (state.game.turn + 1) !== state.players.length ? (state.game.turn + 1) : 0
                }
            };
        }
    };
};

export {actions};
export default createStore();
