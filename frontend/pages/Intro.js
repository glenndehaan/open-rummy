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
                        This website acts as a companion for playing the Open Rummy card game.<br/>
                        It allows for automated point calculations, round win status, current player turn and payout calculations.
                    </p>
                    <h2>Basic Game Details</h2>
                    <p>
                        <strong>Total Players:</strong> 2 - 8<br/>
                        <strong>Cards:</strong> 2x standard deck of 52 playing cards (104 cards total)<br/>
                        <strong>Age:</strong> 18+<br/>
                        <strong>Playing Direction:</strong> Clockwise
                    </p>
                    <p>
                        The order of cards for sequences is 2-3-4-5-6-7-8-9-10-J-Q-K-A in each round.<br/>
                        You play up to 300 points. When a player reaches this amount of points the player wins and it is game over.
                    </p>
                    <h2>Dealing</h2>
                    <p>
                        Determine the first Dealer. The Dealer swaps each hand with the direction of play (Clockwise).<br/>
                        Every player gets 13 cards. Deal the cards one by one, the other cards form a Deck. Turn the first card over and place it face up to start the Discard pile.
                    </p>
                    <h2>The Game</h2>
                    <p>
                        The player next to the Dealer is the first to start. Your turn consists of at least two mandatory actions:<br/>
                        1. Draw a card to start your turn, be it the top card of the face-down deck or the top card of the face-up Discard Pile. <br/>
                        2. Place a card on the discard pile, this action ends your turn.
                    </p>
                    <p>
                        Tussen de twee handelingen in mag je uitleggen of kaarten aanleggen als je dat kunt en wilt. Zoals gebruikelijk bij spellen van de rummy-groep is het de bedoeling dat je zoveel mogelijk van je handkaarten kwijtraakt, door ze uit te leggen, aan te leggen en af te leggen.
                    </p>
                    <p>
                        Uitleggen doe je door een bepaalde combinatie van minimaal 3 kaarten uit je hand open op tafel te leggen. Dit mogen sequenties of sets zijn. Sequenties zijn kaarten die elkaar opvolgen in dezelfde bloem. Sets zijn kaarten van dezelfde rang. Je mag maar één set of sequentie uitleggen per beurt.
                    </p>
                    <p>
                        Je mag ook kaarten aanleggen aan reeds uitgelegde kaarten van jezelf of anderen, zolang ze aansluiten op de combinatie die er ligt. Je mag géén uitgelegde combinaties hervormen. Aanleggen van kaarten mag je onbeperkt doen.
                    </p>
                    <p>
                        Wanneer de Stok op is en een speler wil niet de bovenste kaart van de Aflegstapel trekken, dan wordt de Aflegstapel omgedraaid zonder te schudden om een nieuwe Stok te vormen.
                    </p>
                    <p>
                        Wanneer een speler zijn laatste kaart op de Aflegstapel legt, heeft hij de hand gewonnen (hij gaat ‘uit’). De winnaar scoort het aantal punten op de kaarten wat de tegenspelers nog in hun handen hebben. B-V-H zijn ieder 10 punten waard, A is 1 punt waard en numerieke kaarten hun getalwaarde. Wanneer iemand in één keer uitgaat (dus met evenveel kaarten als dat hij bedeeld kreeg), dan scoort hij een rummy; de punten die hij wint deze hand worden verdubbeld.
                    </p>
                    <p>
                        Cumulatieve score wordt bijgehouden van hand tot hand totdat de afgesproken score bereikt is of het aantal handen is gespeeld.
                    </p>
                    <h2>Variabele regels</h2>
                    <p>
                        <strong>Geen uitleglimiet;</strong> je mag zoveel combinaties uitleggen in een beurt als je wilt<br/>
                        <strong>Aanlegverbod;</strong> je mag niet aanleggen zolang je zelf nog niet op tafel bent gekomen met minstens één combinatie<br/>
                        <strong>Aas-hoog-laag;</strong> azen tellen zowel hoog als laag, en hebben een puntwaarde van 15.<br/>
                        <strong>Aas-brug;</strong> azen vormen een brug tussen de K en de 2<br/>
                        <strong>Laatste kaart;</strong> je bent altijd verplicht om een kaart af te leggen, je mag niet al je kaarten aan- of uitleggen<br/>
                        <strong>Tussendoor schudden;</strong> sommigen schudden de Aflegstapel alvorens een nieuwe Stok te vormen
                    </p>
                </section>
                <ButtonBar buttons={[{text: "Let's start!", color: 'success', click: () => this.nextStep()}]}/>
            </>
        );
    }
}

/**
 * Connect the store to the component
 */
export default connect('route', actions)(Intro);
