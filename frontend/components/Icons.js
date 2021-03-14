import {h, Component} from 'preact';

/**
 * Person icon
 *
 * @param className
 * @return {JSX.Element}
 */
const person = ({className}) => {
    return (
        <svg viewBox="0 0 24 24" className={className}>
            <path d="M12 6c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2m0 10c2.7 0 5.8 1.29 6 2H6c.23-.72 3.31-2 6-2m0-12C9.79 4 8 5.79 8 8s1.79 4 4 4 4-1.79 4-4-1.79-4-4-4zm0 10c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
        </svg>
    );
};

/**
 * Define all icons
 */
const types = {
    person
};

export default class Icon extends Component {
    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        const { type, ...rest } = this.props;

        const Comp = types[type];
        return <Comp {...rest}/>;
    }
}
