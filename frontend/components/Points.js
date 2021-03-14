import {h, Component} from 'preact';

import style from './Points.module.scss';

export default class Points extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <div className={style.container}>
                <span className={style.center}>
                    <input type="number" className={style.numberInput} value="100" disabled={true}/>
                    points
                </span>
            </div>
        );
    }
}
