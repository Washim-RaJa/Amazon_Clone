import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import carousel_1 from "../assets/images/carousel_1.jpg";
import carousel_2 from "../assets/images/carousel_2.jpg";
import carousel_3 from "../assets/images/carousel_3.jpg";
import carousel_4 from "../assets/images/carousel_4.jpg";
import carousel_5 from "../assets/images/carousel_5.jpg";
import carousel_vid from '../assets/images/carousel_vid.mp4'

const Carousel = () => {
  return (
    <div className="h-[600px] bg-white">
      <Swiper
        loop={true}
        spaceBetween={0}
        className="h-[50%]"
        navigation={true}
        modules={[Navigation, Autoplay]}
        autoplay={{
            delay: 8100
        }}
      >
        <SwiperSlide>
          <img src={carousel_1} alt="carousel_1" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_2} alt="carousel_2" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted autoPlay>
            <source src={carousel_vid} type="video/mp4"/>
          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_3} alt="carousel_3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_4} alt="carousel_4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={carousel_5} alt="carousel_5" />
        </SwiperSlide>
      </Swiper>
      <div className="h-[50%] bg-gradient-to-b from-stone-900"/>
    </div>
  );
};

export default Carousel;
