import React from 'react'
import './home.css'
import Navar from '../Nav/Navar'

import imagen from '../../assets/phrasal.png'

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Autoplay, Pagination, Navigation } from "swiper/modules"

import { styled } from '@mui/material/styles';

const Div = styled('div')(({ theme }) => ({
    ...theme.typography.button,
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
}));

const Home = () => {

    const imgs = [
        { id: 1, img: imagen },
        { id: 2, img: imagen },
        { id: 3, img: imagen },
        { id: 4, img: imagen },
    ]
    return (
        <div>
            <nav>
                <Navar />
            </nav>

            <div className='home-body'>
                <h3 className='title-carrusel'>"These are the most popular lessons."</h3>

                <Swiper
                    
                    spaceBetween={40}
                    centeredSlides={true}
                    slidesPerView={2}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation]}
                    className="mySwiper "
                >
                    {imgs.map(value => (
                        <SwiperSlide key={value.id}>
                            <article className='artic'>
                                <img className='img-carrusel' src={value.img} alt="img" />
                            </article>

                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </div>
    )
}

export default Home
