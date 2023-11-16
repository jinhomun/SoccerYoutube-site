import React from 'react'
import { Link } from 'react-router-dom'

import { youtuberText } from '../../data/youtuber'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Autoplay } from 'swiper/modules';


const youtuber = () => {
    return (
        <section id="youtuber">
            <h2>⚽축구 유튜버 모음⚽</h2>
            <div className="youtuber__inner">
                <Swiper
                    slidesPerView={9}
                    spaceBetween={30}
                    navigation={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                    }}
                    breakpoints={{
                        100: {
                            slidesPerView: 2,
                            spaceBetween: 15,
                        },
                        400: {
                            slidesPerView: 4,
                            spaceBetween: 15,
                        },
                        960: {
                            slidesPerView: 5,
                            spaceBetween: 20,
                        },
                        1200: {
                            slidesPerView: 7,
                            spaceBetween: 20,
                        },
                        1600: {
                            slidesPerView: 9,
                            spaceBetween: 30,
                        },
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 4,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 6,
                            spaceBetween: 50,
                        },
                    }}
                    modules={[Autoplay, Navigation]}
                    className="mySwiper"

                >
                    {youtuberText.map((youtuber, key) => (
                        <SwiperSlide>
                            <div className='youtuber play__icon' key={key}>
                                <div className="youtuber__img">
                                    <Link to={`/channel/${youtuber.channelId}`}>
                                        <img src={youtuber.img} alt="{youtuber.autor}" />
                                    </Link>
                                </div>
                                <div className='youtuber__info'>{youtuber.autor}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    )
}

export default youtuber