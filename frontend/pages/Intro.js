import {h, Component, Fragment} from 'preact';
import {connect} from 'unistore/preact';
import {actions} from '../modules/store';

import ButtonBar from '../components/ButtonBar';

import style from './Intro.module.scss';

class Intro extends Component {
    /**
     * Runs then component mounts
     */
    componentDidMount() {
        document.title = 'Intro | Open Rummy';
    }

    /**
     * Update the router to the next step
     */
    nextStep() {
        this.props.updateRouter('players');
    }

    /**
     * Update the router to the archive
     */
    archive() {
        this.props.updateRouter('archive');
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
                    <h1>Open Rummy (Playing Card Game)</h1>
                    <h2 className={style.space}>This Website</h2>
                    <p>
                        This website acts as a tool for playing the Open Rummy card game.<br/>
                        It allows for automated point calculations, round win status, current player turn and payout calculations.
                    </p>
                    <h2>Basic Game Details</h2>
                    <p>
                        <strong>Total Players:</strong> 2 - 8<br/>
                        <strong>Cards:</strong> 2x standard deck of 52 playing cards (104 cards total)<br/>
                        <strong>Age:</strong> 12+<br/>
                        <strong>Playing Direction:</strong> Clockwise
                    </p>
                    <p>
                        The order of cards for sequences is 2-3-4-5-6-7-8-9-10-J-Q-K-A in each round.<br/>
                        You play up to 300 points. When a player reaches this amount of points the player wins and it is game over.
                    </p>
                    <h2>Dealing</h2>
                    <p>
                        Determine the first dealer. This could be done by shuffling the cards, give each player a closed card and turn it over. The player with the highest card is the dealer. The dealer swaps every round with the direction of play (Clockwise).<br/>
                        Every player gets 13 cards. Deal the cards one by one, the remaining cards form a deck where players can buy new cards from. Turn the first card over from the deck and place it face up to start the discard pile.
                    </p>
                    <h2>The Game</h2>
                    <p>
                        The player next to the Dealer is the first to start (clockwise). Your turn consists of at least two mandatory actions:<br/>
                        1. Draw a card to start your turn, be it the top card of the face-down deck or the top card of the face-up discard pile.<br/>
                        2. Place a card on the discard pile, this action ends your turn.
                    </p>
                    <p>
                        Between these two mandatory actions you can make points by placing sets on the table or add cards to an existing set. To win the round, you have to lose all the cards in your hand by placing sets, adding cards to an existing set or lose cards by placing a card to the discard pile, this will immediately end your turn.
                    </p>
                    <p>
                        You can place a set on the table if they are at least:<br/>
                        • 3 cards of the same sequence (2,3,4)<br/>
                        • Or; with the same value (3 kings).
                    </p>
                    <p>
                        You may also add cards to an existing set, from who the set is does not matter. Placings sets or adding cards to an existing set can be done until you do not have any more sets or cannot add any more cards to existing sets. You than have to end your turn by placing a card on the discard pile.
                    </p>
                    <p>
                        Important to know is that a sequence of a set is always the same color. For instance, if you have a set of 7 spades, 8 spades and 9 spades you can place that set on the table. If the 8 of spades is 8 of harts, you cannot place that set on the table. The same applies for adding a card to the sequence.
                    </p>
                    <p>
                        When you are placing a set with the same value, for instance 3 aces. They have to be 3 different colors. A set with the same value can only exists of a maximum of 4 different colors (clubs, aces, diamonds and harts). When a set with the same value contains the 4 different colors it may be closed and put away from the game. They do not longer play a role in this round.
                    </p>
                    <p>
                        By placing sets on table or adding cards to an existing set the player earns points. The following points can be earned:<br/>
                        The cards 2 till 9 are worth 5 points each.<br/>
                        The cards 10 till king are worth 10 points each.<br/>
                        The card ace is worth 15 points each.
                    </p>
                    <p>
                        When a player places its last card at the discard pile it wins. The other players have to count their remaining hand as described above, these points will be subtracted from their collected points. When a player has reached 300 points it will win after the last played round. A player has not won when it is in a round where it achieved the 300 points margin and there has not been a player that put its last card to the discard pile. Only when a round is done and after subtracting the remaining point a player can win when still having those 300 points.
                    </p>
                </section>
                <ButtonBar small={true} buttons={[{text: "Let's start!", color: 'success', click: () => this.nextStep()}, {text: "Archive", color: 'warning', small: true, click: () => this.archive()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route', actions)(Intro);
