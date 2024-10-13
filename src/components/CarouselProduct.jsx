import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { Link } from "react-router-dom";


const CarouselProduct = () => {
  return (
    <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Best Sellers</div>
      <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation={true}
        modules={[Navigation]}
      >
        {
          // Run this 9 times and give 9 SwiperSlides
          Array.from({ length: 9 }, (_, i) => (
            <SwiperSlide key={i} className="flex justify-center">
              <Link to={`/product/${i}`}>
                <img src={`../../src/assets/images/product_${i}_small.jpg`} alt="product_small" />
              </Link>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  );
};

export default CarouselProduct;
