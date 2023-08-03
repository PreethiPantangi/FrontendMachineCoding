import React from 'react'
import imageOne from '../../assets/carousel/1.jpg'
import imageTwo from '../../assets/carousel/2.jpg'
import imageThree from '../../assets/carousel/3.jpg'
import imageFour from '../../assets/carousel/4.jpg'
import imageFive from '../../assets/carousel/5.jpg'
import imageSix from '../../assets/carousel/6.jpg'
import Carousel from './Carousel'

const CarouselPage = () => {

    const images = [imageOne, imageTwo, imageThree, imageFour, imageFive, imageSix];

    return (
        <Carousel images={images}/>
    )
}

export default CarouselPage