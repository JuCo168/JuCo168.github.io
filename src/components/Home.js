import { React, useEffect, useState } from "react";
import styles from "../assets/styles"
import { slides } from "../assets";
import { SlArrowLeft, SlArrowRight } from 'react-icons/sl'
import Carousel from "./Carousel";
import Swipe from "react-easy-swipe";

function Home() {
  const [curIndex, setIndex] = useState(0)
  const [pause, setPause] = useState(false)
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (pause === false) {
        setIndex(curIndex => (curIndex + 1) % slides.length);
      }}, 1500);

    return () => clearInterval(intervalId);
  });
  const nextSlide = () => {
    return setIndex(curIndex => (curIndex + 1) % slides.length)
  }
  const prevSlide = () => {
    return setIndex(curIndex === 0 ? slides.length - 1 : curIndex - 1)
  }

  return (
    <section id="home" className={`flex justify-center flex-col ${styles.paddingY}`}>
      <div className="w-full h-[600px] flex overflow-hidden relative items-center justify-center">
        <Swipe onSwipeLeft={prevSlide} onSwipeRight={nextSlide}>
          { slides.map((slide, index) => (
            <div className={ index === curIndex ? `object-cover relative ${slide.pos}-[${slide.px}px]` : 'hidden' }>
              <img src={slide.image} alt={slide.label} key={index} 
                onMouseEnter={() => { setPause(true) }}
                onMouseLeave={() => { setPause(false) }}/>
            </div>
          ))}
        </Swipe>
        {/* slide indicators */}
        <div className="absolute w-full flex justify-center bottom-0">
          {slides.map((_, index) => (
            <div className={ index === curIndex
                ? "h-2 w-2 bg-tertiary rounded-full mx-2 mb-2 cursor-pointer"
                : "h-2 w-2 bg-white rounded-full mx-2 mb-2 cursor-pointer" }
              key={index} onClick={() => { setIndex(index) }}/>
          ))}
        </div>
        {/* left and right buttons */}
        <SlArrowLeft onClick={prevSlide} className='absolute left-0 text-3xl inset-y-1/2 text-white cursor-pointer' />
        <SlArrowRight onClick={nextSlide} className='absolute right-0 text-3xl inset-y-1/2 text-white cursor-pointer' />
      </div>
    </section>
  );
  
}

export default Home;