import React from 'react'
import Navar from '../../Nav/Navar';
import './lessonsA1.css'
import demonstratives from '../../../assets/demonstratives.png'


import Button from '@mui/joy/Button';

const Demonstratives = () => {
    const pronouns = [
        { title: "This (Este/Esta):", f: "Se utiliza para referirse a un sustantivo singular que está cerca en distancia o tiempo.", e: ' "This book is interesting" (Este libro es interesante)' },
        { title: "That (Ese/Esa):", f: " Se utiliza para referirse a un sustantivo singular que está más lejos en distancia o tiempo.", e: '  "I like that movie" (Me gusta esa película).' },
        { title: "These (Estos/Estas): ", f: "Se utiliza para referirse a sustantivos en plural que están cerca en distancia o tiempo.", e: '  "These shoes are comfortable" (Estos zapatos son cómodos).' },
        { title: "Those (Esos/Esas):", f: "Se utiliza para referirse a sustantivos en plural que están más lejos en distancia o tiempo.", e: '  "I saw those birds in the sky" (Vi esos pájaros en el cielo).' },

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
                    Demonstrative pronouns
                </Button>

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >Los demonstrative pronouns, o pronombres demostrativos en español, son palabras que se utilizan para señalar o especificar a qué objeto o persona nos referimos en una oración. En inglés, hay cuatro pronombres demostrativos: "this" - este/esta, "that" - ese/esa, "these" - estos/estas, y "those" - esos/esas.
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

                    </div>
                ))}
                <div className='img-card'>

                    <img className='img-card-a1' src={demonstratives} alt="demonstratives" />
                </div>


            </article>

        </div>

    )
}

export default Demonstratives
