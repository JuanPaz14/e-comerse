'use client';

import {Swiper, SwiperSlide } from "swiper/react";
import {Swiper as SwiperObject} from 'swiper';
import { Autoplay, FreeMode, Pagination} from "swiper/modules";
import Image  from "next/image";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';

import './slidesshow.css';
import { useState } from "react";


interface Props{
    images: string[];
    title: string;
    className?: string;
}

export const ProductMobileSlideShow = ({images,title,className}:Props) => {

    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperObject>();

    return (
        <div className={className}>
            
            <Swiper
                style={{
                    width:'100vw',
                    height: '500px'
                }}
                pagination
                autoplay={{
                    delay:2500
                }}
             
                modules={[FreeMode,Autoplay, Pagination]}
                className="mySwiper2"
            >  

                {
                    images.map(image=>(
                        <SwiperSlide key={image}>
                            <Image
                                width={1080}
                                height={1024}
                                src = {`/products/${image}`}
                                alt = {title}
                                className=" object-fill"
                            />
                        </SwiperSlide>     
                    ))
                }
            </Swiper>
            
        </div>
    
  )
}
