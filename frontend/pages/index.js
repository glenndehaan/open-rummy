import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import mitt from 'mitt';

import PlayersOverview from '../components/Players';
import Notification from '../components/Notification';

import Intro from './Intro';
import Players from './Players';
import PlayerTurn from './PlayerTurn';
import PlayerLoss from './PlayerLoss';
import GameOver from './GameOver';

/**
 * Define all pages
 */
const pages = {
    intro: Intro,
    players: Players,
    playerTurn: PlayerTurn,
    playerLoss: PlayerLoss,
    gameOver: GameOver
};

class Pages extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        window.events = mitt();
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {route} = this.props;
        const Cmp = pages[route];

        if(Cmp) {
            return (
                <>
                    <Notification/>
                    <PlayersOverview/>
                    <main>
                        <Cmp/>
                    </main>
                </>
            );
        } else {
            console.error(`Missing page for route: ${route}`);
            return null;
        }
    }
}

/**
 * Connect the store to the component
 */
export default connect('route')(Pages);
