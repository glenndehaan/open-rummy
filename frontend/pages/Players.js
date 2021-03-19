import {h, Component, Fragment, createRef} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';
import Icon from '../components/Icons';

import array from '../utils/array';

import style from './Players.module.scss';

class Players extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            errorMinimum: false,
            errorUnique: false
        };

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
        const players = Object.keys(this.elements).map((el) => {
            return this.elements[el].current.value;
        }).filter((el) => {
            return el !== "";
        });

        if(players.length < 2) {
            this.setState({
                errorMinimum: true
            });

            return;
        }

        if(array.checkForDuplicates(players)) {
            this.setState({
                errorUnique: true
            });

            return;
        }

        this.props.setPlayers(players);
        this.props.startGame();
        this.props.updateRouter('playerTurn');
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {errorMinimum, errorUnique} = this.state;

        return (
            <>
                <section>
                    {errorMinimum &&
                        <div className={style.error}>At least two players are required!!</div>
                    }
                    {errorUnique &&
                        <div className={style.error}>All player names should be unique!!</div>
                    }
                    <h1>Players</h1>
                    <span>Please provide all player names below. Make sure to set the order the same as your table setting (Start with the first player after the dealer). Note: Leave player names empty if you don&apos;t need them.</span>
                    <div className={style.container}>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 1 Name" ref={this.elements.player1} maxLength="10"/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 2 Name" ref={this.elements.player2} maxLength="10"/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 3 Name" ref={this.elements.player3} maxLength="10"/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 4 Name" ref={this.elements.player4} maxLength="10"/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 5 Name" ref={this.elements.player5} maxLength="10"/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 6 Name" ref={this.elements.player6} maxLength="10"/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 7 Name" ref={this.elements.player7} maxLength="10"/>
                        </span>
                        <span>
                            <Icon type="person" className={style.icon}/>
                            <input type="text" className={style.playerInput} placeholder="Player 8 Name" ref={this.elements.player8} maxLength="10"/>
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
