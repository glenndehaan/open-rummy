import {h, Fragment} from 'preact';

/**
 * Contains the game rules
 *
 * @returns {JSX.Element}
 */
const rules = () => {
    return (
        <>
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
                Determine the first dealer. This could be done to shuffle the cards, give each player a closed card and turn it over. The player with the highest card is the dealer. The dealer swaps every round with the direction of play (Clockwise).<br/>
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
                • Or; with the same value (3 kings)
            </p>
            <p>
                You may also add cards to an existing set, from who the set were does not matter. However before you are allowed to add cards to an existing set you need to have at least made one set yourself during the round. Placings sets or adding cards to an existing set can be done until you do not have any more sets or cannot add any more cards to existing sets. You than have to end your turn by placing a card to the discard pile.
            </p>
            <p>
                If you are unable to create your first set, and therefore are not allowed to add cards to an existing set: Place a card on the discard pile to end your round.
            </p>
            <p>
                Important to know is that a sequence of a set is always the same color. For instance, if you have a set of 7 spades, 8 spades and 9 spades you can place that set on the table. If the 8 of spades is 8 of harts, you cannot place that set on the table. The same applies for adding a card to the sequence.
            </p>
            <p>
                When you are placing a set with the same value, for instance 3 aces. They have to be 3 different colors. A set with the same value can only exists of a maximum of 4 different colors (clubs, aces, diamonds and harts). When a set with the same value contains the 4 different colors it may be closed and put away from the game. They do not longer play a role in this round.
            </p>
            <h2>Points</h2>
            <p>
                By placing sets on table or adding cards to an existing set the player earns points. The following points can be earned:<br/><br/>
                The cards <strong>2</strong> till <strong>9</strong> are worth 5 points each.<br/>
                The cards <strong>10</strong> till <strong>king</strong> are worth 10 points each.<br/>
                The <strong>ace</strong> is worth 15 points each.<br/>
                The <strong>joker</strong> is worth 30 points each when left in a players hand when the round ends. During the round the joker has the same value as the place it fills in (example: 2-Joker-4 makes 15 points). When replacing the joker with the missing card no points are counted. Only when the joker returns on the table it will count for points again.
            </p>
            <h2>Winning a round</h2>
            <p>
                When a player places its last card on the discard pile it wins (you always need to end your turn by placing a card on the discard pile). The other players have to count their remaining hand as described above, these points will be subtracted from their collected points.
            </p>
            <h2>Winning the game</h2>
            <p>
                When a player has reached 300 points (or more) it will win after the last played round. A player has not won when it is in a round where it achieved the 300 points margin and there has not been a player that put its last card to the discard pile. Only when a round is done and after subtracting the remaining points a player can win when still having those 300 points (or more).
            </p>
            <h2>Card Swap</h2>
            <p>
                When starting a new round the player next to the dealer is allowed to swap a card from its hand with the card laying on the discard pile. Important to know is that the player will end his round immediately. A player may only swap after the player before him/her has swapped also. When a player decides to grab a card form the discard pile or the stockpile and plays a hand the player next to them is not allowed to swap from the discard pile.
            </p>
            <h2>Joker</h2>
            <p>
                A joker can be used for any card in the game. Important to know is that another player can steal that joker from a set by replacing it for the missing card. When someone throws a card on the discard pile and it turns out to be a missing card replaced by a joker. The next player is not allowed to grab that single card. It has to pick up a card before that and make a set before he/she may steal the joker.
            </p>
        </>
    )
}

/**
 * Export the rules
 */
export default rules;
