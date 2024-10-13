import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import category_0 from "../assets/images/category_0.jpg";
import category_1 from "../assets/images/category_1.jpg";
import category_2 from "../assets/images/category_2.jpg";
import category_3 from "../assets/images/category_3.jpg";
import category_4 from "../assets/images/category_4.jpg";
import category_5 from "../assets/images/category_5.jpg";
import { createSearchParams, useNavigate } from "react-router-dom";


const CarouselCategory = () => {
    const navigate = useNavigate()

    const searchCategory = (category) => {
        navigate({
            pathname: "search",
            search: `${
              createSearchParams({  // Create a url with provide category & searchTerm
                category: `${category}`,
                searchTerm: ``
              })
            }`
        })
    }

  return (
    <div className="bg-white m-3">
        <div className="text-2xl font-semibold p-3">Shop by Category</div>
        <Swiper slidesPerView={5} spaceBetween={10} navigation={true} modules={[Navigation]}>
            <SwiperSlide onClick={()=> searchCategory("Deals")} className="flex justify-center cursor-pointer">
                <img src={category_0} alt="category_0" />
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchCategory("Amazon")} className="flex justify-center cursor-pointer">
                <img src={category_1} alt="category_1" />
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchCategory("Fashion")} className="flex justify-center cursor-pointer">
                <img src={category_2} alt="category_2" />
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchCategory("Computers")} className="flex justify-center cursor-pointer">
                <img src={category_3} alt="category_3" />
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchCategory("Home")} className="flex justify-center cursor-pointer">
                <img src={category_4} alt="category_4" />
            </SwiperSlide>
            <SwiperSlide onClick={()=> searchCategory("Mobiles")} className="flex justify-center cursor-pointer">
                <img src={category_5} alt="category_5" />
            </SwiperSlide>
        </Swiper>
    </div>
  )
}

export default CarouselCategory