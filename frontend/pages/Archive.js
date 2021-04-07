import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';
import Dialog from '../components/Dialog';

import storage from '../modules/storage';

import style from './Archive.module.scss';

class Archive extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            cleanupDialog: false
        };
    }

    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Archive | Open Rummy';
    }

    /**
     * Update the router to the intro
     */
    back() {
        this.props.updateRouter('intro');
    }

    /**
     * Navigate to the game over page
     *
     * @param game
     */
    details(game) {
        this.props.loadGame(game);
        this.props.updateRouter('gameOver');
    }

    /**
     * Remove game archive
     */
    cleanup() {
        storage.set('archive', []);
        this.closeCleanupDialog();
    }

    /**
     * Shows the cleanup dialog
     */
    openCleanupDialog() {
        this.setState({
            cleanupDialog: true
        });
    }

    /**
     * Hides the cleanup dialog
     */
    closeCleanupDialog() {
        this.setState({
            cleanupDialog: false
        });
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {cleanupDialog} = this.state;
        const archive = storage.get('archive');

        const dateOptions = {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
            hour12: false
        };

        return (
            <>
                <section className={style.container}>
                    {cleanupDialog &&
                        <Dialog title="Are you sure?" next={() => this.cleanup()} cancel={() => this.closeCleanupDialog()}>
                            Are you sure you want to cleanup the entire archive?<br/>
                            This removes all items from the archive.
                        </Dialog>
                    }
                    <h1 className={style.header}>Archive</h1>
                    {archive.length > 0 &&
                        <table>
                            <thead>
                                <tr>
                                    <th align="left">Date/Time</th>
                                    <th align="left">Winner(s)</th>
                                    <th align="left"/>
                                </tr>
                            </thead>
                            <tbody>
                                {archive.reverse().map((game, key) => (
                                    <tr key={key}>
                                        <td align="left">{new Date(game.game.time.end).toLocaleTimeString('en-US', dateOptions)}</td>
                                        <td align="left">
                                            {game.game.win.map((e) => {
                                                return game.players[e];
                                            }).join(', ')}
                                        </td>
                                        <td align="center">
                                            <button className={style.openButton} onClick={() => this.details(game)}>
                                                Details
                                            </button>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    }
                    {archive.length > 0 && <button onClick={() => this.openCleanupDialog()} className={style.cleanupButton}>Remove All Archive Games</button>}
                    {archive.length < 1 && <strong>The archive seems to be empty! Play a game to fill it up</strong>}
                </section>
                <ButtonBar buttons={[{text: "Back", color: "success", click: () => this.back()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players,game', actions)(Archive);
