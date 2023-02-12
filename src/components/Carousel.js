import { React } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper";
import 'swiper/css';
import "swiper/css/pagination";
import "swiper/css/navigation";
import styles from "../assets/styles"


function Carousel(props) {
    <Swiper slidesPerView={1}
    spaceBetween={0}
    autoplay={{ delay: 1700, disableOnInteraction: false, }}
    loop={true}
    pagination={{ clickable: true, dynamicBullets: true, }}
    navigation={true}
    modules={[Autoplay, Pagination, Navigation]}
    className="w-full h-full mx-auto">
    { props.slides.map((slide, index) => (
        <SwiperSlide className={`block object-cover w-full h-full ${slide.pos}-[${slide.px}px]`}>
            <img src={slide.image} alt={slide.desc} key={index} />
        </SwiperSlide>
    ))}
    </Swiper>
}

export default Carousel;