import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';

import style from './GameOver.module.scss';

class GameOver extends Component {
    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Game Over | Open Rummy';
    }

    /**
     * Handles the restart function
     */
    restart() {
        this.props.setPlayers([]);
        this.props.updateRouter('players');
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
                    <h1 className={style.header}>Game Over</h1>
                    <h3>{players[game.win]} has won the game!!</h3>
                </section>
                <ButtonBar buttons={[{text: "New game", color: "success", click: () => this.restart()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players,game', actions)(GameOver);
