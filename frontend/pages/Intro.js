import {h, Component} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

class Intro extends Component {
    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Intro | Open Rummy';
    }

    /**
     * Update the router to the next tab
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
                <button onClick={() => this.nextStep()}>Let&apos;s start!</button>
            </main>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route', actions)(Intro);
