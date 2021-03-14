import {h, Component, Fragment, createRef} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';
import Points from '../components/Points';

class PlayerTurn extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.points = createRef();
    }

    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Game | Open Rummy';
    }

    /**
     * Handles the next player function
     */
    nextPlayer() {
        this.props.addPoints(this.points.current.state.value);
        this.props.nextPlayer();
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
                    <Points turn={game.turn} ref={this.points}/>
                </section>
                <ButtonBar buttons={[{text: "Next player", color: "success", click: () => this.nextPlayer()}, {text: "End round", color: "error", click: () => {}}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players,game', actions)(PlayerTurn);
