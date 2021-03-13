import {h, Component} from 'preact';
import {connect} from 'unistore/preact';

import Intro from './Intro';

/**
 * Define all pages
 */
const pages = {
    intro: Intro
};

class Pages extends Component {
    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Home | Open Rummy';
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {route} = this.props;
        const IconComp = pages[route];

        if(IconComp) {
            return (
                <main>
                    <IconComp/>
                </main>
            );
        } else {
            console.error(`Missing page for route: ${route}`);
            return null;
        }
    }
}

/**
 * Connect the store to the component
 */
export default connect('route')(Pages);
