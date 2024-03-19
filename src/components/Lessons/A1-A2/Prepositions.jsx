import React from 'react'
import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';


const Prepositions = () => {
    const pronouns = [
        {
            title: 'At (en, a)',
            u: 'Uso espacial: "at the store" (en la tienda).',
            u1: 'Uso temporal: "at 3 o`clock" (a las 3 en punto).'
        },
        {
            title: 'On (sobre, en):',
            u: 'Uso espacial: "on the table" (sobre la mesa).',
            u1: 'Uso temporal: "on Monday" (el lunes).'
        },
        {
            title: 'In (en, dentro de):',
            u: 'Uso espacial: "in the house" (en la casa).',
            u1: 'Uso temporal: "in June" (en junio).'
        },
        {
            title: 'Under (debajo de):',
            u: 'Uso espacial: "under the bed" (debajo de la cama).',
            u1: '-'
        },
        {
            title: 'Between (entre):',
            u: 'Uso espacial: "between the two houses" (entre las dos casas).',
            u1: '-'
        },
        {
            title: 'Over (encima de):',
            u: 'Uso espacial: "over the rainbow" (sobre el arco iris).',
            u1: '-'
        },
        {
            title: 'Behind (detrás de):',
            u: 'Uso espacial: "behind the car" (detrás del coche).',
            u1: '-'
        },
        {
            title: 'Beside (al lado de):',
            u: 'Uso espacial: "beside the river" (al lado del río)',
            u1: '-'
        },
        {
            title: 'During (durante):',
            u: 'Uso temporal: "during the movie" (durante la película).',
            u1: '-'
        },
        {
            title: 'For (por, durante):',
            u: 'Uso temporal: "for two hours" (por dos horas).',
            u1: '-'
        },
        {
            title: 'Before (antes de):',
            u: 'Uso temporal: "before the concert" (antes del concierto).',
            u1: '-'
        },
        {
            title: 'After (después de):',
            u: 'Uso temporal: "after the meeting" (después de la reunión).',
            u1: '-'
        },
        {
            title: 'With (con):',
            u: 'Uso de compañía: "with my friend" (con mi amigo).',
            u1: '-'
        },
        {
            title: 'Without (sin):',
            u: 'Uso de ausencia: "without hesitation" (sin dudar).',
            u1: '-'
        },
        {
            title: 'Among (entre, en medio de):',
            u: 'Uso espacial: "among the flowers" (entre las flores)',
            u1: '-'
        },
        {
            title: 'Through (a través de):',
            u: 'Uso espacial: "through the tunnel" (a través del túnel).',
            u1: '-'
        },
        {
            title: 'Across (a través de, al otro lado de):',
            u: 'Uso espacial: "across the street" (al otro lado de la calle).',
            u1: '-'
        },
        {
            title: 'Towards (hacia):',
            u: 'Uso espacial: "walking towards the park" (caminando hacia el parque).',
            u1: '-'
        },
        {
            title: 'Against (contra):',
            u: 'Uso espacial: "leaning against the wall" (apoyado contra la pared).',
            u1: '-'
        },
        {
            title: 'Around (alrededor de):',
            u: 'Uso espacial: "around the world" (alrededor del mundo).',
            u1: '-'
        },
        {
            title: 'Onto(en, sobre, por encima de, arriba de):',
            u: 'Uso espacial: "We can get onto the bus here.(Podemos subir al autobús aquí.)',
            u1: '-'
        },

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
                    Prepositions
                </Button>

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >Las preposiciones son palabras que establecen una relación espacial, temporal o lógica entre dos elementos en una oración. Aquí tienes una explicación sobre las preposiciones en inglés y sus usos más comunes:
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
                                color='primary'
                                size='md'
                            >{person.u}
                            </Button>
                        </p>
                        <p>
                            <Button
                                variant='plain'
                                color='primary'
                                size='md'
                            >{person.u1}
                            </Button>
                        </p>


                    </div>
                ))}
            </article>

        </div>
    )
}

export default Prepositions
