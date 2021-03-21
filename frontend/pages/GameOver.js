import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';
import Dialog from '../components/Dialog';

import money from '../utils/money';

import style from './GameOver.module.scss';

class GameOver extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            restartDialog: false
        };
    }

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
        this.closeRestartDialog();
        this.props.setPlayers([]);
        this.props.updateRouter('players');
    }

    /**
     * Open the restart dialog
     */
    openRestartDialog() {
        this.setState({
            restartDialog: true
        });
    }

    /**
     * Close the restart dialog
     */
    closeRestartDialog() {
        this.setState({
            restartDialog: false
        });
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {players, game} = this.props;
        const {restartDialog} = this.state;

        const keys = Object.keys(game.points);
        const sort = keys.sort((a, b) => { return game.points[b] - game.points[a] });

        const winPayout = money.calculateWin(this.props.players, this.props.game);
        const roundPayout = money.calculateRounds(this.props.players, this.props.game);

        const dateOptions = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            timeZoneName: 'short',
            hour12: false
        };

        return (
            <>
                {restartDialog &&
                    <Dialog title="Are you sure?" next={() => this.restart()} cancel={() => this.closeRestartDialog()}>
                        Are you sure you want start a new game? This action will reset all data!<br/><br/>
                        <strong>This action cannot be undone!</strong>
                    </Dialog>
                }
                <section className={style.container}>
                    <h1 className={style.header}>Game Over</h1>
                    <h2>{players[game.win]} has won the game!!</h2>
                    <span>The game started at: {new Date(game.time.start).toLocaleTimeString('en-US', dateOptions)} - The game ended at: {new Date(game.time.end).toLocaleTimeString('en-US', dateOptions)}</span>
                    <h3 className={style.specialHeading}>Results</h3>
                    <table className={style.results}>
                        <thead>
                            <tr>
                                <th align="left">#</th>
                                <th align="left">Player</th>
                                <th align="left">Points</th>
                                <th align="left">Wins</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sort.map((player, key) => (
                                <tr key={key}>
                                    <td align="left">{key + 1}</td>
                                    <td align="left">{player}</td>
                                    <td align="right">{game.points[player]}</td>
                                    <td align="right">{game.wins.filter((e) => {return e === players.indexOf(player)}).length}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <h3 className={style.specialHeading}>Payout</h3>
                    <table className={style.results}>
                        <thead>
                            <tr>
                                <th align="left">#</th>
                                <th align="left">Player</th>
                                <th align="left">Points</th>
                                <th align="left">Wins</th>
                                <th align="left">Total</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sort.map((player, key) => (
                                <tr key={key}>
                                    <td align="left">{key + 1}</td>
                                    <td align="left">{player}</td>
                                    <td align="right">&euro; {winPayout[player].toFixed(2)}</td>
                                    <td align="right">&euro; {roundPayout[player].toFixed(2)}</td>
                                    <td align="right">&euro; {(winPayout[player] + roundPayout[player]).toFixed(2)}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </section>
                <ButtonBar buttons={[{text: "New game", color: "success", click: () => this.openRestartDialog()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players,game', actions)(GameOver);
