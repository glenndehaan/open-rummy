import {h, Component, Fragment, createRef} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';
import Icon from '../components/Icons';

import style from './Players.module.scss';

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
        this.props.startGame();
        this.props.updateRouter('playerTurn');
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <>
                <section>
                    <h1>Players</h1>
                    <span>Please provide all player names below. Make sure to set the order the same as your table setting. Note: Leave player names empty if you don&apos;t need them.</span>
                    <div className={style.container}>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 1 Name" ref={this.elements.player1}/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 2 Name" ref={this.elements.player2}/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 3 Name" ref={this.elements.player3}/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 4 Name" ref={this.elements.player4}/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 5 Name" ref={this.elements.player5}/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 6 Name" ref={this.elements.player6}/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 7 Name" ref={this.elements.player7}/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 8 Name" ref={this.elements.player8}/>
                        </span>
                    </div>
                </section>
                <ButtonBar buttons={[{text: "Save players", color: "success", click: () => this.nextStep()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players', actions)(Players);
