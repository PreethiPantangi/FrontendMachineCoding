import React, { useEffect, useState } from 'react'

const Carousel = ({images}) => {

    const [imageIndex, setImageIndex] = useState(0);
    const [imageData, setImageData] = useState(images[0]);

    const prevOrNextImage = (state) => {
        let index = imageIndex;
        if(state === 'prev') {
            if(index - 1 < 0) {
                index = images.length - 1;
            } else {
                index--;
            }
        } else {
            if(index + 1 > images.length - 1) {
                index = 0;
            } else {
                index++;
            }
        }
        for (let i = 0; i < images.length; i++) {
            if(i === index) {
                setImageData(images[i]);
            }
        }
        setImageIndex(index);
    }

    return (
        <div>
            <p className='text-center mt-4 font-bold'>Carousel</p>
            <div className='flex items-center justify-center'>
                <img 
                    src='https://www.iconpacks.net/icons/2/free-arrow-left-icon-3099-thumb.png' 
                    className='cursor-pointer w-10 h-10'
                    onClick={() => {prevOrNextImage('prev')}}
                />
                <img className='w-96 h-96 m-4' src={imageData}/>
                <img 
                    src='https://www.iconpacks.net/icons/2/free-arrow-right-icon-3098-thumb.png' 
                    className='cursor-pointer w-10 h-10'
                    onClick={() => {prevOrNextImage('next')}}
                />
            </div>
            <div className='flex items-center justify-center'>
                <ul className='flex space-x-5'>
                    {
                        images.map((image, index) => 
                            <li 
                                className={imageIndex === index ? 'cursor-pointer font-bold' : 'cursor-pointer'}
                                onClick={() => {setImageIndex(index); setImageData(images[index])}}
                                key={index}
                            >
                                {index+1}
                            </li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Carousel