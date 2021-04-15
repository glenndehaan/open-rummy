import {h, Component} from 'preact';

import ButtonBar from './ButtonBar';

import style from './Overlay.module.scss';

export default class Overlay extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {children, title, close} = this.props;

        return (
            <div className={style.container}>
                <div className={style.inner}>
                    <div className={style.text}>
                        <h1>{title}</h1>
                        {children}
                    </div>
                    <ButtonBar sticky={true} buttons={[{text: "Close", color: "success", click: () => close()}]}/>
                </div>
            </div>
        );
    }
}
