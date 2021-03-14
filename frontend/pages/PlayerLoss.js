import {h, Component, Fragment, createRef} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';
import Points from '../components/Points';

class PlayerLoss extends Component {
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
        this.props.removePoints(this.points.current.state.value);

        if((this.props.loss.length - 1) === 0) {
            const gameOver = Object.keys(this.props.game.points).filter((e) => {
                return this.props.game.points[e] >= 300;
            });

            if(gameOver.length < 1) {
                this.props.updateRouter('playerTurn');
            } else {
                this.props.gameOver();
                this.props.updateRouter('gameOver');
            }
        }
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {players, loss} = this.props;

        return (
            <>
                <section>
                    <h1>{players[loss[0]]}&apos;s Loss</h1>
                    <span>Enter the total amount of points the player still has in his/her hand</span>
                    <Points negative={true} turn={loss[0]} ref={this.points}/>
                </section>
                <ButtonBar buttons={[{text: "Next player", color: "success", click: () => this.nextPlayer()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players,game,loss', actions)(PlayerLoss);
