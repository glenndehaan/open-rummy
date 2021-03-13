import {h, Component} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';

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
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <main>
                Intro<br/>
                <ButtonBar buttons={[{text: "Let's start!", color: 'success', click: () => this.nextStep()}]}/>
            </main>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route', actions)(Intro);
