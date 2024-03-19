import React from 'react'

import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';

const ResultConnectors = () => {
    const pronouns = [
        {
            title: 'So (así que)',
            e: 'Example: It was raining, so we stayed indoors.',
          },
          {
            title: 'Therefore (por lo tanto)',
            e: 'Example: She forgot her umbrella; therefore, she got wet in the rain.',
          },
          {
            title: 'Consequently (como consecuencia)',
            e: 'Example: He missed the train; consequently, he arrived late.',
          },
          {
            title: 'As a result (como resultado)',
            e: "Example: They didn't prepare for the presentation; as a result, it didn't go well.",
          },
          {
            title: 'Thus (así)',
            e: 'Example: The road was closed, thus we had to take a detour.',
          },
          {
            title: 'Hence (por lo tanto)',
            e: 'Example: The flight was canceled; hence, we had to reschedule.',
          },
          {
            title: 'Accordingly (en consecuencia)',
            e: 'Example: The project was completed ahead of schedule; accordingly, we celebrated.',
          },
          {
            title: 'For this reason (por esta razón)',
            e: 'Example: She forgot to set the alarm, and for this reason, she overslept.',
          },   
          {
            title: '“so ” + adjective/adverb + “that ” (tan.. que',
            e: 'Example: We were so impatient that we couldn’t wait for them.',
          },   
          {
            title: 'that’s why(por esta razón)',
            e: 'Example: I’ve been ill. That’s why I didn’t call.',
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
                    Connectors of reasult
                </Button>
                <br />

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >Estos conectores son útiles para expresar el resultado lógico o la consecuencia de una acción anterior en un contexto determinado. Ayudan a conectar ideas y mejorar la coherencia en la comunicación escrita o hablada.  
                Los conectores de resultado o consecuencia son palabras o frases que se utilizan para expresar el resultado o la consecuencia de una acción o situación. Aquí tienes algunos conectores de resultado comunes en inglés:
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

export default ResultConnectors
