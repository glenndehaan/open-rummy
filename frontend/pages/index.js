import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';

import PlayersOverview from '../components/Players';

import Intro from './Intro';
import Players from './Players';

/**
 * Define all pages
 */
const pages = {
    intro: Intro,
    players: Players
};

class Pages extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {route} = this.props;
        const IconComp = pages[route];

        if(IconComp) {
            return (
                <>
                    <PlayersOverview/>
                    <main>
                        <IconComp/>
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
