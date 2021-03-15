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
                    <p>
                        Aantal spelers; 2 tot 6<br/>
                        Kaarten; standaard pak van 52 kaarten<br/>
                        Speelrichting: Met de klok mee
                    </p>
                    <p>
                        De volgorde van de kaarten voor sequenties is A-2-3-4-5-6-7-8-9-10-B-V-H in iedere bloem.<br/>
                        Men speelt tot een bepaalde score vooraf bepaald of een vast aantal handen.
                    </p>
                    <h3>Delen</h3>
                    <p>
                        Coupeer om de eerste Deler te bepalen. Deler wisselt iedere hand met de speelrichting mee.<br/>
                        Met 2 spelers krijgt ieder 10 kaarten. Met 3 of 4 spelers krijgt ieder 7 kaarten, met 5 of 6 spelers ieder 6 kaarten.  Deel de kaarten één voor één, de overige kaarten vormen een Stok. Draai de eerste kaart hiervan om en leg hem open neer om de Aflegstapel te beginnen.
                    </p>
                    <h3>Spel</h3>
                    <p>
                        Voorhand is als eerste aan de beurt. Je beurt bestaat minimaal uit twee verplichte acties;<br/>
                        1. Een kaart trekken om je beurt te beginnen, zij het de bovenste kaart van de gedekte Stok of de bovenste kaart van de open Aflegstapel.<br/>
                        2. Een kaart op de Aflegstapel leggen, deze handeling eindigt je beurt. Indien je in het begin van je beurt de bovenste kaart van de Aflegstapel hebt getrokken, mag je niet diezelfde kaart op de Aflegstapel gooien in deze beurt.
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
                    <p>
                        Variabele regels;<br/>
                        Geen uitleglimiet; je mag zoveel combinaties uitleggen in een beurt als je wilt<br/>
                        Aanlegverbod; je mag niet aanleggen zolang je zelf nog niet op tafel bent gekomen met minstens één combinatie<br/>
                        Aas-hoog-laag; azen tellen zowel hoog als laag, en hebben een puntwaarde van 15.<br/>
                        Aas-brug; azen vormen een brug tussen de K en de 2<br/>
                        Laatste kaart; je bent altijd verplicht om een kaart af te leggen, je mag niet al je kaarten aan- of uitleggen<br/>
                        Tussendoor schudden; sommigen schudden de Aflegstapel alvorens een nieuwe Stok te vormen
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
