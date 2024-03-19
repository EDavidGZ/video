import React from 'react'
import Navar from '../../Nav/Navar';
import './lessonsA1.css'


import Button from '@mui/joy/Button';


const At = () => {
    const pronouns = [
        { title: '"At"', 
          ut: 'Uso en el tiempo:',
          t1: 'Se utiliza para horas específicas.',
          e1: 'Ejemplo: "I have a meeting at 3 PM."',
          t2: 'También se utiliza con expresiones de tiempo como "at night," "at the moment," "at the weekend," etc.',
          e2: 'Ejemplo: "I like to read at night."',
          us: 'Uso en el espacio',
          s1: 'Se utiliza para ubicaciones específicas, direcciones o eventos.',
          e3: 'Ejemplo: "I am waiting for you at the bus stop."',
          s2: 'También se utiliza para indicar un lugar en general, como "at the cinema," "at the office," etc.',
          e4: 'Ejemplo: "She works at a hospital."'
     },
        { title: '"On"', 
          ut: 'Uso en el tiempo:',
          t1: 'Se utiliza para días específicos de la semana y fechas.',
          e1: 'Ejemplo: "We will meet on Monday." -  "My birthday is on the 15th of July."',
          t2: '-',
          e2: '-',
          us: 'Uso en el espacio',
          s1: 'Se utiliza para superficies planas, como mesas o superficies de trabajo.',
          e3: 'Ejemplo: "The book is on the table."',
          s2: 'También se utiliza con medios de transporte públicos como "on the bus," "on the plane," etc.',
          e4: 'Ejemplo: "I saw her on the train."'
     },
        { title: '"In"', 
          ut: 'Uso en el tiempo:',
          t1: 'Se utiliza para períodos más largos, meses, estaciones y años.',
          e1: 'Ejemplo: "I was born in April." - "She will start college in the fall." -  "We met in 2010."',
          t2: '-',
          e2: '-',
          us: 'Uso en el espacio',
          s1: 'Se utiliza para espacios cerrados o áreas más grandes.',
          e3: 'Ejemplo: "The cat is in the box."',
          s2: 'También se utiliza con ciudades, países y regiones.',
          e4: 'Ejemplo: "He lives in Paris." - "She is from a small town in Canada."'
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
                    at - in - on 
                </Button>

                <Button
                    variant='plain'
                    color='neutral'
                    size='md'
                >Las preposiciones "at," "on," y "in" son comunes en inglés y se utilizan para indicar la ubicación en el tiempo o en el espacio. Aquí hay una guía general sobre sus usos:
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
                            >{person.ut}
                            </Button>
                        </p>


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
                                color='danger'
                                size='md'
                            >{person.e1}
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
                                color='danger'
                                size='md'
                            >{person.e2}
                            </Button>
                        </p>
                        <p>
                            <Button
                                variant='plain'
                                color='primary'
                                size='md'
                            >{person.us}
                            </Button>
                        </p>
                        <p>
                            <Button
                                variant='plain'
                                color='neutral'
                                size='md'
                            >{person.s1}
                            </Button>
                        </p>
                        <p>
                            <Button
                                variant='plain'
                                color='danger'
                                size='md'
                            >{person.e3}
                            </Button>
                        </p>
                        <p>
                            <Button
                                variant='plain'
                                color='neutral'
                                size='md'
                            >{person.s2}
                            </Button>
                        </p>
                        <p>
                            <Button
                                variant='plain'
                                color='danger'
                                size='md'
                            >{person.e4}
                            </Button>
                        </p>

                    </div>
                ))}
            </article>

        </div>
  )
}

export default At
