import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';

import style from './Archive.module.scss';

class GameOver extends Component {
    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Archive | Open Rummy';
    }

    /**
     * Update the router to the intro
     */
    back() {
        this.props.updateRouter('intro');
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
                    <h1 className={style.header}>Archive</h1>
                    <h2>Coming soon!</h2>
                </section>
                <ButtonBar buttons={[{text: "Back", color: "success", click: () => this.back()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route,players,game', actions)(GameOver);
