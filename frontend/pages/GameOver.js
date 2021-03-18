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
        const keys = Object.keys(game.points);
        const sort = keys.sort((a, b) => { return game.points[b] - game.points[a] });

        return (
            <>
                <section>
                    <h1 className={style.header}>Game Over</h1>
                    <h2>{players[game.win]} has won the game!!</h2>
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
                    <h3 className={style.specialHeading}>Payout (Coming Soon)</h3>
                    <table className={style.results}>
                        <thead>
                            <tr>
                                <th align="left">#</th>
                                <th align="left">Player</th>
                                <th align="left">Payout</th>
                            </tr>
                        </thead>
                        <tbody>
                            {sort.map((player, key) => (
                                <tr key={key}>
                                    <td align="left">{key + 1}</td>
                                    <td align="left">{player}</td>
                                    <td align="right">&euro; 0,-</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
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
