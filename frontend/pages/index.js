import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';

import PlayersOverview from '../components/Players';

import Intro from './Intro';
import Players from './Players';
import PlayerTurn from './PlayerTurn';

/**
 * Define all pages
 */
const pages = {
    intro: Intro,
    players: Players,
    playerTurn: PlayerTurn
};

class Pages extends Component {
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
