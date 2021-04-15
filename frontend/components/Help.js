import {h, Component, Fragment} from 'preact';

import Overlay from './Overlay';

import Rules from '../utils/rules';

import style from './Help.module.scss';

export default class Help extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            helpOpen: false
        };
    }

    /**
     * Opens the help overlay
     */
    openHelp() {
        this.setState({
            helpOpen: true
        });
    }

    /**
     * Closes the help overlay
     */
    closeHelp() {
        this.setState({
            helpOpen: false
        });
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {children} = this.props;
        const {helpOpen} = this.state;

        return (
            <>
                {helpOpen &&
                    <Overlay title="Help / Game Rules" close={() => this.closeHelp()}>
                        <Rules/>
                    </Overlay>
                }
                <div className={style.container}>
                    {children}
                    <button className={style.helpButton} onClick={() => this.openHelp()}>
                        ?
                    </button>
                </div>
            </>
        );
    }
}
