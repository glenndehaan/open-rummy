import {h, Component} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';

class PlayerTurn extends Component {
    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Game | Open Rummy';
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <div>
                Turn
                <ButtonBar buttons={[{text: "Next player", color: "success", click: () => {}}, {text: "End round", color: "error", click: () => {}}]}/>
            </div>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players', actions)(PlayerTurn);
