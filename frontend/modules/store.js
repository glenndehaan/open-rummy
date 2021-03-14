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
        loss: [],
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
        removePoints(state, payload) {
            const newState = {
                loss: state.loss.filter((e, key) => {return key !== 0}),
                game: {
                    ...state.game
                }
            };

            newState.game.points[state.players[state.loss[0]]] -= parseInt(payload);

            return newState;
        },
        nextPlayer(state) {
            return {
                game: {
                    ...state.game,
                    turn: (state.game.turn + 1) !== state.players.length ? (state.game.turn + 1) : 0
                }
            };
        },
        endRound(state) {
            const newState = {
                loss: state.players.map((e, key) => {return key}).filter((e) => {return e !== state.game.turn}),
                game: {
                    ...state.game,
                    turn: 0
                }
            };

            newState.game.wins.push(state.game.turn);

            return newState;
        },
        gameOver(state) {
            const keys = Object.keys(state.game.points);
            const sort = keys.sort((a, b) => { return state.game.points[b] - state.game.points[a] });

            return {
                game: {
                    ...state.game,
                    started: false,
                    finished: true,
                    win: state.players.indexOf(sort[0])
                }
            };
        }
    };
};

export {actions};
export default createStore();
