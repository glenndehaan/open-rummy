import {h, Component, Fragment, createRef} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';
import Points from '../components/Points';

import style from './PlayerTurn.module.scss';

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
        this.props.addPoints(this.points.current.state.value !== '' ? this.points.current.state.value : 0);
        this.props.nextPlayer();
    }

    /**
     * Handles the end round function
     */
    endRound() {
        this.props.addPoints(this.points.current.state.value !== '' ? this.points.current.state.value : 0);
        this.props.endRound();
        this.props.updateRouter('playerLoss');
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
                    <h1>{players[game.turn]}&apos;s Turn <span className={style.smaller}>(Round {game.wins.length + 1})</span></h1>
                    <span>Enter the total amount of points made this turn</span>
                    <Points turn={game.turn} ref={this.points}/>
                </section>
                <ButtonBar buttons={[{text: "Next player", color: "success", click: () => this.nextPlayer()}, {text: "End round", color: "error", click: () => this.endRound()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players,game', actions)(PlayerTurn);
