import {h, Component} from 'preact';
import clsx from 'clsx';

import style from './ButtonBar.module.scss';

export default class ButtonBar extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {buttons, small = false, sticky = false} = this.props;

        return (
            <footer className={clsx(style.container, small && style.smallContainer, sticky && style.stickyContainer)} style={{'--buttons': buttons.length}}>
                {buttons.map((button, key) => (
                    <button key={key} className={clsx(style[`color-${button.color}`], button.small && style.small)} onClick={button.click}>{button.text}</button>
                ))}
            </footer>
        );
    }
}
