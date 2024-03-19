import React from 'react'
import Navar from '../../Nav/Navar';
import './lessonsA1.css'

import Button from '@mui/joy/Button';

// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/effect-cards";
// import { EffectCards } from "swiper/modules";




const Pronouns = () => {

    const pronouns = [
        { title: "Pronombres personales del sujeto:", p1: "I - yo", p2: "You - tú, usted", p3: "He - él", p4: "She - ella", p5: "It - eso, para objetos o animales", p6: "We - nosotros/as", p7: "You - vosotros/as, ustedes", p8: "They - ellos/as", e1: "I am going to the store. - Voy a la tienda.", e2: "She is reading a book. - Ella está leyendo un libro.", e3: "We are working on a project. - Estamos trabajando en un proyecto." },
        { title: "Pronombres personales del objeto:", p1: "Me - a mí, me", p2: "You - a ti, a usted, te, lo, la, le, os, os, los, las, les", p3: "Him - a él, lo, le", p4: "Her - a ella, la, le", p5: "It - a eso, lo, le, para objetos o animales", p6: "Us - a nosotros/as, nos", p7: "You - a vosotros/as, a ustedes, os, los, las, les", p8: "Them - a ellos/as, los, las, les", e1: "She gave me a gift. - Ella me dio un regalo.", e2: "We invited them to the party. - Los invitamos a la fiesta.", e3: "The teacher was walking with them - La profesora estaba caminando con ellos." },
        { title: "Pronombres posesivos:", p1: "My (mi)", p2: "Your (tu, su)", p3: "His (su)", p4: "Her (su)", p5: "Its (su, para objetos o animales)", p6: "Our (nuestro/a)", p7: "Your (vuestro/a, su)", p8: "Their (su)", e1: "This is my car. (Este es mi coche.)", e2: "Their house is big. (Su casa es grande.)", e3: "That is his backpack (Esa es su mochila de el" },
        { title: "Pronombres reflexivos:", p1: "Myself (a mí mismo/a)", p2: "Yourself (a ti mismo/a, a usted mismo/a)", p3: "Himself (a él mismo)", p4: "Herself (a ella misma)", p5: "Itself (a sí mismo/a, para objetos o animales)", p6: "Ourselves (a nosotros/as mismos/as)", p7: "Yourselves (a vosotros/as mismos/as, a ustedes mismos/as)", p8: "Themselves (a ellos/as mismos/as)", e1: "She did it herself. (Ella misma lo hizo.)", e2: "We need to take care of ourselves. (Tenemos que cuidarnos a nosotros mismos.)", e3: "You have to do it yourself (Tienes que hacerlo tu mismo.)" },

    ]
    return (
        <div className='lessons-container-card '>

            <nav>
                <Navar />
            </nav>

            {/* <Swiper
                effect={"cards"}
                grabCursor={true}
                loop={true}
                modules={[EffectCards]}
                className="mySwiper"
            > */}
                <article className='card-pronouns'>
                    <Button
                        variant='plain'
                        color='danger'
                        size='lg'
                    >
                        Personal Pronouns
                    </Button>

                    <Button
                        variant='plain'
                        color='neutral'
                        size='md'
                    >En inglés, los pronombres personales son palabras que se utilizan en lugar de un sustantivo para evitar la repetición de dicho sustantivo. Estos pronombres indican quién está realizando la acción o a quién se hace referencia en una oración. Aquí están los pronombres personales en inglés:
                    </Button>



                    {pronouns.map(person => (
                        // <SwiperSlide key={person.title} >
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
                                    >{person.p1}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.p2}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.p3}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.p4}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.p5}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.p6}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.p7}
                                    </Button>
                                </p>
                                <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.p8}
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
                                     <p>
                                    <Button
                                        variant='plain'
                                        color='neutral'
                                        size='md'
                                    >{person.e3}
                                    </Button>
                                </p>
                            </div>
                        // </SwiperSlide>
                    ))}


                </article>
            {/* </Swiper> */}
        </div>
    )
}

export default Pronouns
