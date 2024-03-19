import React from 'react'

import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';

const Purpose = () => {
    const pronouns = [
        {
            title: 'To + Infinitive (para)',
            e: 'Example: She went to the store to buy some groceries.',
        },
        {
            title: 'In order to (not) + Infinitive (para(no))',
            e: 'Example: He studied hard in order to pass the exam.',
        },
        {
            title: 'So as to (not) + Infinitive (para(no))',
            e: 'Example: They woke up early so as to catch the first train.',
        },
        {
            title: 'So that + Sentence (para que)',
            e: 'Example: I turned off the lights so that we could sleep.',
        },
        {
            title: 'For + Gerund (V-ing) - (para)',
            e: 'Example: She went to the gym for exercising.',
        },
    ];

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
                    Purpose
                </Button>
                <br />

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >Estos conectores son utilizados para indicar la razón o el propósito detrás de una acción o situación. Pueden ayudar a mejorar la coherencia y la claridad en la comunicación escrita o hablada al expresar claramente la intención detrás de ciertos actos o eventos.
                     Los conectores de propósito son palabras o frases que se utilizan para expresar la finalidad, el objetivo o el propósito de una acción. Aquí tienes algunos conectores de propósito comunes en inglés:
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
                            >{person.e}
                            </Button>
                        </p>


                    </div>
                ))}
            </article>

        </div>
    )
}

export default Purpose
