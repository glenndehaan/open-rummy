import {h, Component} from 'preact';
import Dialog from "./Dialog";

export default class Notification extends Component {
    /**
     * Constructor
     */
    constructor() {
        super();

        this.state = {
            notifications: []
        };

        window.events.on('notification', (e) => this.add(e.title, e.content));
    }

    /**
     * Adds a new notification
     *
     * @param title
     * @param content
     */
    add(title, content) {
        const tempState = this.state.notifications;
        tempState.push({
            title,
            content
        });

        this.setState({
            notifications: tempState
        });
    }

    /**
     * Closes a notification
     *
     * @param index
     */
    close(index) {
        const tempState = this.state.notifications;
        delete tempState[index];

        this.setState({
            notifications: tempState
        });
    }

    /**
     * Renders a single notification
     *
     * @param notification
     * @param index
     * @return {*}
     */
    renderNotification(notification, index) {
        return (
            <Dialog title={notification.title} key={index} next={() => this.close(index)}>
                <span dangerouslySetInnerHTML={{__html: notification.content}}/>
            </Dialog>
        );
    }

    /**
     * Preact render function
     *
     * @returns {*}
     */
    render() {
        return (
            <div id="notifications">
                {this.state.notifications.map((notification, index) => this.renderNotification(notification, index))}
            </div>
        );
    }
}
