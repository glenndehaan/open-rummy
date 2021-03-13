import {h, Component} from 'preact';
import {connect} from 'unistore/preact';

class Players extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {players} = this.props;

        return (
            <header>
                {players.map((player, key) => (
                    <div key={key}>{player}</div>
                ))}
            </header>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('players')(Players);
