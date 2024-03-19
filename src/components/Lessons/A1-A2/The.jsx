import React from 'react'
import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';

const The = () => {
    const pronouns = [
        { title: "Antes de sustantivos específicos:", f: "Se utiliza para referirse a algo específico que es conocido o que ya ha sido mencionado.", e: ' "I saw a cat in the garden. The cat was black."'},
        { title: "Con nombres geográficos únicos:", f: "Se utiliza con nombres geográficos únicos como océanos, ríos, cadenas montañosas, y puntos cardinales.", e: '"The Amazon is a long river."'},
        { title: 'Con nombres geográficos que incluyen "republic," "kingdom," "state," etc.:', f: 'Se utiliza cuando nos referimos a un país o una región que incluye "republic," "kingdom," "state," etc.', e: ' "The United States is a large country."'},
        { title: 'Con nombres de mares, océanos y grupos de islas:', f: 'Se utiliza con nombres de mares, océanos y grupos de islas', e: ' "The Pacific Ocean is the largest ocean."'},
        { title: 'Antes de superlativos:', f: 'Se utiliza con superlativos para indicar que algo es el mejor, el peor, el más grande, etc.', e: '"He is the tallest person in the room."'},
        { title: 'Con nombres de instrumentos musicales:', f: 'Se utiliza con nombres de instrumentos musicales', e: ' "She plays the piano."'},
        { title: 'En expresiones con "of":', f: 'Se utiliza en expresiones que indican posesión, origen, contenido, etc.', e: ' "The top of the mountain."'},
        { title: 'Con nombres propios que tienen la intención de ser únicos:', f: 'Se utiliza con nombres propios que se consideran únicos.', e: ' "The Mona Lisa is a famous painting."'},
        { title: 'Con nombres de periódicos:', f: 'Se utiliza con nombres de periódicos.', e: '"I read about it in The New York Times."'},
        { title: 'Cuando es obvio a qué nos referimos:', f: 'Se utiliza cuando es evidente cuál es el objeto o la persona al que nos referimos.', e: '"Can you pass me the salt?"'},

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
                    the
                </Button>

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >Los artículos definidos se utilizan para referirse a algo en particular, algo específico y conocido por el hablante y el oyente. Aquí te proporciono información sobre el uso del artículo definido "the" en inglés:
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
                            >{person.f}
                            </Button>
                        </p>


                        <p>
                            <Button
                                variant='plain'
                                color='primary'
                                size='md'
                            >Ejemplo:
                            </Button>
                        </p>

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

export default The
