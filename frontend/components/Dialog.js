import {h, Component} from 'preact';

import ButtonBar from './ButtonBar';

import style from './Dialog.module.scss';

export default class Dialog extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {children, title, next, cancel} = this.props;

        return (
            <div className={style.container}>
                <div className={style.inner}>
                    <div className={style.text}>
                        <h1>{title}</h1>
                        {children}
                    </div>
                    {typeof next === "function" && typeof cancel !== "function" && <ButtonBar buttons={[{text: "Next", color: "success", click: () => next()}]}/>}
                    {typeof next === "function" && typeof cancel === "function" && <ButtonBar buttons={[{text: "Continue", color: "success", click: () => next()}, {text: "Cancel", color: "error", click: () => cancel()}]}/>}
                </div>
            </div>
        );
    }
}
