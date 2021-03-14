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
            win: "",
            turn: ""
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
        }
    };
};

export {actions};
export default createStore();
