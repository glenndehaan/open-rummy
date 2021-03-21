import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';
import mitt from 'mitt';

import PlayersOverview from '../components/Players';
import Notification from '../components/Notification';
import Dialog from '../components/Dialog';

import Intro from './Intro';
import Players from './Players';
import PlayerTurn from './PlayerTurn';
import PlayerLoss from './PlayerLoss';
import GameOver from './GameOver';
import Archive from './Archive';

import storage from '../modules/storage';

/**
 * Define all pages
 */
const pages = {
    intro: Intro,
    players: Players,
    playerTurn: PlayerTurn,
    playerLoss: PlayerLoss,
    gameOver: GameOver,
    archive: Archive
};

class Pages extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        window.events = mitt();

        this.state = {
            restoreGame: false
        };
    }

    /**
     * Runs then component mounts
     */
    componentDidMount() {
        const game = storage.get('game');

        if(this.props.route === 'intro') {
            if (game !== null) {
                if (game.started && !game.finished) {
                    this.setState({
                        restoreGame: true
                    });
                }
            }
        }
    }

    /**
     * Restores a game
     */
    restoreGame() {
        this.closeRestoreGame();
        this.props.restoreGame();
    }

    /**
     * Closes the restore game dialog
     */
    closeRestoreGame() {
        this.setState({
            restoreGame: false
        });
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {route} = this.props;
        const {restoreGame} = this.state;

        const Cmp = pages[route];

        if(Cmp) {
            return (
                <>
                    {restoreGame &&
                        <Dialog title="Restore unfinished game?" next={() => this.restoreGame()} cancel={() => this.closeRestoreGame()}>
                            A game has been found in storage that was unfinished.<br/>
                            Do you want to restore this game?
                        </Dialog>
                    }
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
export default connect('route', actions)(Pages);
