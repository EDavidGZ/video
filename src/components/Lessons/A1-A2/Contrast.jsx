import React from 'react'
import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';

const Contrast = () => {
    const pronouns = [
        {
            title: 'But (pero)',
            e: "Example: She studied hard, but she didn't pass the exam.",
        },
        {
            title: 'However (sin embargo)',
            e: 'Example: He wanted to go; however, he had other commitments.',
        },
        {
            title: 'On the other hand (por otro lado)',
            e: 'Example: The weather was beautiful. On the other hand, they decided to stay indoors.',
        },
        {
            title: 'Although / Though / Even though (aunque)',
            e: 'Example: Although it was raining, they went for a walk.',
        },
        {
            title: 'While (mientras)',
            e: 'Example: He likes coffee, while she prefers tea.',
        },
        {
            title: 'Nevertheless (no obstante)',
            e: 'Example: It was a difficult task; nevertheless, they managed to complete it.',
        },
        {
            title: 'In contrast (en contraste)',
            e: 'Example: The first part was easy. In contrast, the second part was challenging.',
        },
        {
            title: 'Despite / In spite of (a pesar de)',
            e: 'Example: Despite the rain, they continued with the outdoor event.',
        },
        {
            title: 'Conversely (por el contrario)',
            e: 'Example: She thought it was easy; conversely, he found it difficult.',
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
                    Contrast
                </Button>
                <br />

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >Estos conectores son útiles para mostrar oposición, contraste o concesión entre ideas o situaciones, permitiendo una transición suave entre diferentes partes del texto y mejorando la claridad de la comunicación.
                    Los conectores de contraste o concesión son palabras o frases que se utilizan para expresar una diferencia o contraposición entre dos ideas o situaciones. Aquí tienes algunos conectores de contraste comunes en inglés:                </Button>



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

export default Contrast
