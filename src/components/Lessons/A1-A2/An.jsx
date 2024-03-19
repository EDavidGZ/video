import React from 'react'
import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';

const An = () => {
    const pronouns = [
        { title: "a - un/una", f: "Se usa antes de palabras que comienzan con una consonante o con una vocal pronunciada como consonante (es decir, una vocal con sonido de consonante al inicio).", e: ' "a book" (un libro)', e1: '"a car" (un coche)', e2: '"a university" (una universidad) - aquí, "university" comienza con el sonido de "y", que es una consonante.' },
        { title: "an - un/una", f: "Se utiliza antes de palabras que comienzan con una vocal que tiene un sonido de vocal al principio (es decir, una vocal que no tiene sonido de consonante al inicio).", e: '"an apple" (una manzana)', e1: '"an orange (una naranja)', e2: '"an hour" (una hora) - aquí, "hour" comienza con una "h" no pronunciada, por lo que el sonido de la vocal es lo que determina el uso de "an".' },
        { title: "---", f: ' La elección entre "a" y "an" se basa en el sonido, no en la letra escrita. Por ejemplo, aunque "university" comienza con la letra "u", que es una vocal, se utiliza "a" antes de "university" porque el sonido inicial es el de la consonante "y".', e: ' "I saw a cat in the street." (Vi un gato en la calle.)', e1: '"She wants to buy an umbrella." (Ella quiere comprar un paraguas.)', e2: 'En resumen, los artículos indefinidos "a" y "an" se utilizan para referirse a un objeto o entidad no específica y su elección se basa en el sonido inicial del sustantivo que siga.' },

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
                    an - a
                </Button>

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >El artículo indefinido se refiere a "a" y "an". Aunque ambos son considerados artículos indefinidos, se utilizan en situaciones diferentes dependiendo de la vocal inicial del sustantivo que siga. Aquí hay una explicación más detallada de cada uno:
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
                            >Ejemplos:
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
                        <p>
                            <Button
                                variant='plain'
                                color='neutral'
                                size='md'
                            >{person.e1}
                            </Button>
                        </p>
                        <p>
                            <Button
                                variant='plain'
                                color='neutral'
                                size='md'
                            >{person.e2}
                            </Button>
                        </p>

                    </div>
                ))}
            </article>

        </div>
  )
}

export default An
