import { React, useEffect, useState } from "react";
import { slides } from "../assets";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Swipe from "react-easy-swipe";


function Carousel(props) {
    const [curIndex, setIndex] = useState(0)
    const infiniteScroll = () => {
        return setIndex((curIndex + 1) % props.slides.length)
    }
    
    <div>
        { slides.map((slide, index) => (
            <div className={index === curIndex ? 'block w-full h-auto object-cover' : 'hidden'}>
                <img src={slide.image} alt={slide.desc} key={index}/>
            </div>
        ))}
    </div>
}

export default Carousel;