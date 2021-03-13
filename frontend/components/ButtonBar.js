import {h, Component} from 'preact';

import style from './ButtonBar.module.scss';

export default class ButtonBar extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {buttons} = this.props;

        return (
            <footer className={style.container} style={{'--buttons': buttons.length}}>
                {buttons.map((button, key) => (
                    <button key={key} className={style[`color-${button.color}`]} onClick={button.click}>{button.text}</button>
                ))}
            </footer>
        );
    }
}
