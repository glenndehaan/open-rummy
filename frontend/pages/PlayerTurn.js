import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';
import Points from '../components/Points';

class PlayerTurn extends Component {
    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Game | Open Rummy';
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {players, game} = this.props;

        return (
            <>
                <section>
                    <h1>{players[game.turn]}&apos;s Turn</h1>
                    <span>Enter the total amount of points made this turn</span>
                    <Points/>
                </section>
                <ButtonBar buttons={[{text: "Next player", color: "success", click: () => {}}, {text: "End round", color: "error", click: () => {}}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players,game', actions)(PlayerTurn);
