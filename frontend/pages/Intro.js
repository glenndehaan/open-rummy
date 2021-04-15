import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';

import Rules from '../utils/rules';

import style from './Intro.module.scss';

class Intro extends Component {
    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Intro | Open Rummy';
    }

    /**
     * Update the router to the next step
     */
    nextStep() {
        this.props.updateRouter('players');
    }

    /**
     * Update the router to the archive
     */
    archive() {
        this.props.updateRouter('archive');
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <>
                <section className={style.container}>
                    <h1>Open Rummy (Playing Card Game)</h1>
                    <h2 className={style.space}>This Website</h2>
                    <p>
                        This website acts as a tool for playing the Open Rummy card game.<br/>
                        It allows for automated point calculations, round win status, current player turn and payout calculations.
                    </p>
                    <Rules/>
                </section>
                <ButtonBar small={true} buttons={[{text: "Let's start!", color: 'success', click: () => this.nextStep()}, {text: "Archive", color: 'warning', small: true, click: () => this.archive()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route', actions)(Intro);
