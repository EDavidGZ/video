import React from 'react'
import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';

const Verbs = () => {
    const pronouns = [
        { title: "be - ser o estar", t1: "Present: am/are/is", t2: "Past: was/were", t3: "Past Participle: been", t4: "Gerund: being"},
        { title: "have - tener", t1: "Present: have/has", t2: "Past: had", t3: "Past Participle: had", t4: "Gerund: having"},
        { title: "do - hacer", t1: "Present: do/does", t2: "Past: did", t3: "Past Participle: done", t4: "Gerund: doing"},
        { title: "say - decir", t1: "Present: say/says", t2: "Past: said", t3: "Past Participle: said", t4: "Gerund: saying"},
        { title: "get - conseguir", t1: "Present: get/gets", t2: "Past: got", t3: "Past Participle: gotten/got", t4: "Gerund: getting"},
        { title: "make - hacer", t1: "Present: make/makes", t2: "Past: made", t3: "Past Participle: made", t4: "Gerund: making"},
        { title: "go - ir", t1: "Present: go/goes", t2: "Past: went", t3: "Past Participle: gone", t4: "Gerund: going"},
        { title: "know - saber", t1: "Present: know/knows", t2: "Past: knew", t3: "Past Participle: known", t4: "Gerund: knowing"},
        { title: "know - take", t1: "Present: take/takes", t2: "Past: took", t3: "Past Participle: taken", t4: "Gerund: taking"},
        { title: "see - ver", t1: "Present: see/sees", t2: "Past: saw", t3: "Past Participle: seen", t4: "Gerund: seeing"},
        { title: "come - venir", t1: "Present: come/comes", t2: "Past: came", t3: "Past Participle: come", t4: "Gerund: coming"},
        { title: "think - pensar", t1: "Present: think/thinks", t2: "Past: thought", t3: "Past Participle: thought", t4: "Gerund: thinking"},
        { title: "look - mirar", t1: "Present: look/looks", t2: "Past: looked", t3: "Past Participle: looked", t4: "Gerund: looking"},
        { title: "want - querer", t1: "Present: want/wants", t2: "Past: wanted", t3: "Past Participle: wanted", t4: "Gerund: wanting"},
        { title: "give - dar", t1: "Present: give/gives", t2: "Past: gave", t3: "Past Participle: given", t4: "Gerund: giving"},
        { title: "use - usar", t1: "Present: use/uses", t2: "Past: used", t3: "Past Participle: used", t4: "Gerund: using"},
        { title: "find - encontrar", t1: "Present: find/finds", t2: "Past: found", t3: "Past Participle: found", t4: "Gerund: finding"},
        { title: "tell - decir", t1: "Present: tell/tells", t2: "Past: told", t3: "Past Participle: told", t4: "Gerund: telling"},
        { title: "ask - preguntar", t1: "Present: ask/asks", t2: "Past: asked", t3: "Past Participle: asked", t4: "Gerund: asking"},
        { title: "work - trabajar", t1: "Present: work/works", t2: "Past: worked", t3: "Past Participle: worked", t4: "Gerund: working"},
        { title: "seem - parecer", t1: "Present: seem/seems", t2: "Past: seemed", t3: "Past Participle: seemed", t4: "Gerund: seeming"},
        { title: "call - llamar", t1: "Present: call/calls", t2: "Past: called", t3: "Past Participle: called", t4: "Gerund: calling"},
        { title: "try - intentar", t1: "Present: try/tries", t2: "Past: tried", t3: "Past Participle: tried", t4: "Gerund: trying"},
        { title: "need - necesitar", t1: "Present: need/needs", t2: "Past: needed", t3: "Past Participle: needed", t4: "Gerund: needing"},
        { title: "like - gustar", t1: "Present: like/likes", t2: "Past: liked", t3: "Past Participle: liked", t4: "Gerund: liking"},
        { title: "help - ayudar", t1: "Present: help/helps", t2: "Past: helped", t3: "Past Participle: helped", t4: "Gerund: helping"},
        { title: "play - jugar", t1: "Present: play/plays", t2: "Past: played", t3: "Past Participle: played", t4: "Gerund: playing"},
        { title: "run - correr", t1: "Present: run/runs", t2: "Past: ran", t3: "Past Participle: run", t4: "Gerund: running"},
        { title: "move - mover", t1: "Present: move/moves", t2: "Past: moved", t3: "Past Participle: moved", t4: "Gerund: moving"},
        { title: "watch - observar", t1: "Present: watch/watchs", t2: "Past: watched", t3: "Past Participle: watched", t4: "Gerund: watching"},
        { title: "buy - comprar", t1: "Present: buy/buys", t2: "Past: bought", t3: "Past Participle: bought", t4: "Gerund: buying"},

    ]
    return (
        <div className='lessons-container-card '>

            <nav>
                <Navar />
            </nav>

                <article className='card-pronouns'>
                    <Button
                        variant='plain'
                        color='danger'
                        size='lg'
                    >
                        + Verbos
                    </Button>

                    <Button
                        variant='plain'
                        color='neutral'
                        size='md'
                    >Verbos más utilizados en inglés en sus formas de presente, pasado, pasado participio y gerundio:
                    </Button>



                    {pronouns.map(person => (
                            <div key={person.title}>
                                <Button
                                    variant='plain'
                                    color='warning'
                                    size='lg'
                                >
                                    {person.title}
                                </Button>


                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.t1}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.t2}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.t3}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.t4}
                                    </Button>
                                </p>
                              
                            </div>
                    ))}


                </article>
        </div>

  )
}

export default Verbs
