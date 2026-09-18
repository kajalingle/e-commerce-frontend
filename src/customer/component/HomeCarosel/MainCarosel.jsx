import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { mainCarouselData } from './MainCarosalData';


const Maincarosel = () => (

    // const navigate=use

    const items = mainCarouselData.map((item)=> <img className='cursor-pointer' onClick ={()=} src={item.image} alt=""/>)

    <AliceCarousel
        mouseTracking
        items={items}
        controlsStrategy="alternate"
    />
);

export default Maincarosel;
