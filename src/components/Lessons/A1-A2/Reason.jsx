import React from 'react'

import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';

const Reason = () => {
    const pronouns = [
        {
            title: 'Because (porque)',
            e: 'Example: She stayed home because she was not feeling well.',
          },
          {
            title: 'Since (ya que)',
            e: 'Example: They postponed the meeting since some participants were absent.',
          },
          {
            title: 'As (ya que)',
            e: 'Example: He failed the exam as he didn\'t study enough.',
          },
          {
            title: 'Due to (debido a)',
            e: 'Example: The flight was delayed due to bad weather.',
          },
          {
            title: 'Owing to (debido a)',
            e: 'Example: Owing to the heavy traffic, they arrived late.',
          },
          {
            title: 'Therefore (por lo tanto)',
            e: 'Example: The weather was bad; therefore, the event was canceled.',
          },
          {
            title: 'So (así que)',
            e: 'Example: It was getting late, so they decided to leave.',
          },
          {
            title: 'Consequently (como consecuencia)',
            e: 'Example: She didn\'t study for the test; consequently, she failed.',
          },
          {
            title: 'Hence (por lo tanto)',
            e: 'Example: The car broke down; hence, they had to call for a tow.',
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
                    Connectors of reason
                </Button>
                <br />

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >Estos conectores son útiles para expresar la relación de causa y efecto en una oración o discurso. Ayudan a clarificar por qué ocurre una acción o por qué se produce una situación.
                    Los conectores de razón o causa son palabras o frases que se utilizan para expresar la causa o el motivo detrás de una acción o situación. Aquí tienes algunos conectores de razón comunes en inglés:
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

export default Reason
