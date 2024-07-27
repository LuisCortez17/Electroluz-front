import { Autoplay, FreeMode, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import './styles.css';
import './freeMode.css';
const Home = () => {
    return (
        <>
            {/* banner */}
            <section className='mb-16'>
                <Swiper
                    autoplay={{
                        delay: 5500,
                        disableOnInteraction: false,
                    }}
                    pagination={{
                        dynamicBullets: true,
                    }}
                    modules={[Autoplay, Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 1</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 2</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 3</SwiperSlide>
                </Swiper>
            </section>

            {/* carousel */}
            <section>
                <h1 className='mb-8 text-2xl text-center'> PRODUCTOS DESTACOS DEL MES </h1>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={30}
                    freeMode={true}

                    modules={[FreeMode]}
                    className="mySwiper"
                >
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 1</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 2</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 3</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 4</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 1</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 2</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 3</SwiperSlide>
                    <SwiperSlide className='bg-indigo-500 p-24'>Slide 4</SwiperSlide>
                </Swiper>


            </section>

        </>
    )
}

export default Home