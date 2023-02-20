import { React } from 'react';
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, Navigation } from 'swiper';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { slides } from '../assets';
import { projects } from '../assets/constants';

function Home() {
  return (
    <div className='flex justify-center flex-col pb-2 sm:pb-12'>
      {/* Image carousel */}
      <Swiper slidesPerView={1}
        spaceBetween={0}
        autoplay={{ delay: 1700, disableOnInteraction: false, }}
        loop={true}
        pagination={{ clickable: true, dynamicBullets: true, }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className='w-full h-full mx-auto m-1 ring-4 sm:rounded-md'>
        { slides.map((slide, index) => (
          <SwiperSlide className={`block object-cover w-full h-full`}>
            <img src={slide.image} alt={slide.desc} key={index} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Projects preview */}
      <div className='flex flex-col justify-center px-2 md:px-0 pt-8 sm:pt-20'>
        {/* Projects title */}
        <p className='text-5xl text-center font-semibold pb-2 border-b-2 w-full -mt-2'>Projects</p>
        {/* Projects */}
        <div className='mt-8 mx-2 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8'>
          { projects.slice(0, 2).map((project, index) => (
            <a className='transition ease-in-out delay-100 duration-150 ring-4
              rounded-md justify-center items-center cursor-pointer flex flex-col overflow-hidden
              h-80 relative' 
              href={project.link} target='_blank' rel='noreferrer'>
                <Link to='/projects' className={`flex w-full h-full bg-black/40 absolute justify-center items-center hover:brightness-125
                  ${index == 1 ? '' : 'hidden'}`}>
                    <p className='text-xl shadow-2xl text-white font-semibold'>See more</p>
                </Link>
              <p className='font-semibold pt-2'>
                {project.title}
              </p>
              <p className='text-center p-2'>
                {project.description}
              </p>
              <div className='h-auto w-full overflow-hidden rounded-b-md'>
                <img src={project.image}
                  alt={project.title}
                  className='w-full'/>
              </div>
            </a>
          ))}
        </div>
     </div>
    </div>
  );
  
}

export default Home;