import {h, Component} from 'preact';
import clsx from 'clsx';

import style from './Points.module.scss';

export default class Points extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            value: ''
        };
    }

    /**
     * Update the value
     *
     * @param value
     */
    update(value) {
        this.setState({
            value: `${this.state.value}${value}`
        });
    }

    /**
     * Clear the value
     */
    clear() {
        this.setState({
            value: ''
        });
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const {value} = this.state;

        return (
            <div className={style.container}>
                <span className={style.center}>
                    <input type="number" className={style.numberInput} value={value} disabled={true}/>
                    points
                </span>
                <div className={clsx(style.center, style.keypad)}>
                    <button className={style.key} onClick={() => this.update(7)}>7</button>
                    <button className={style.key} onClick={() => this.update(8)}>8</button>
                    <button className={style.key} onClick={() => this.update(9)}>9</button>

                    <button className={style.key} onClick={() => this.update(4)}>4</button>
                    <button className={style.key} onClick={() => this.update(5)}>5</button>
                    <button className={style.key} onClick={() => this.update(6)}>6</button>

                    <button className={style.key} onClick={() => this.update(1)}>1</button>
                    <button className={style.key} onClick={() => this.update(2)}>2</button>
                    <button className={style.key} onClick={() => this.update(3)}>3</button>

                    <button className={clsx(style.key, style.zero)} onClick={() => this.update(0)}>0</button>
                    <button className={clsx(style.key, style.warningColor)} onClick={() => this.clear()}>CLR</button>
                </div>
            </div>
        );
    }
}
