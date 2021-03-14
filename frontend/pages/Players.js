import {h, Component, createRef} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';

class Players extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.elements = {
            player1: createRef(),
            player2: createRef(),
            player3: createRef(),
            player4: createRef(),
            player5: createRef(),
            player6: createRef(),
            player7: createRef(),
            player8: createRef()
        };
    }

    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Players | Open Rummy';
    }

    /**
     * Update the router to the next step
     */
    nextStep() {
        this.props.setPlayers(Object.keys(this.elements).map((el) => {
            return this.elements[el].current.value;
        }).filter((el) => {
            return el !== "";
        }));
        this.props.updateRouter('playerTurn');
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <div>
                <input type="text" placeholder="Player 1 Name" ref={this.elements.player1}/><br/>
                <input type="text" placeholder="Player 2 Name" ref={this.elements.player2}/><br/>
                <input type="text" placeholder="Player 3 Name" ref={this.elements.player3}/><br/>
                <input type="text" placeholder="Player 4 Name" ref={this.elements.player4}/><br/>
                <input type="text" placeholder="Player 5 Name" ref={this.elements.player5}/><br/>
                <input type="text" placeholder="Player 6 Name" ref={this.elements.player6}/><br/>
                <input type="text" placeholder="Player 7 Name" ref={this.elements.player7}/><br/>
                <input type="text" placeholder="Player 8 Name" ref={this.elements.player8}/><br/>
                <ButtonBar buttons={[{text: "Save players", color: "success", click: () => this.nextStep()}]}/>
            </div>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players', actions)(Players);
