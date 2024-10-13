import { Carousel, CarouselCategory, CarouselProduct, HomePageCard } from "./";
import home_grid_1 from "../assets/images/home_grid_1.jpg";
import home_grid_2 from "../assets/images/home_grid_2.jpg";
import home_grid_3 from "../assets/images/home_grid_3.jpg";
import home_grid_4 from "../assets/images/home_grid_4.jpg";
import home_grid_5 from "../assets/images/home_grid_5.jpg";
import home_grid_6 from "../assets/images/home_grid_6.jpg";
import home_grid_7 from "../assets/images/home_grid_7.jpg";
import home_grid_8 from "../assets/images/home_grid_8.jpg";
import banner_image from '../assets/images/banner_image.jpg'
import banner_image_2 from '../assets/images/banner_image_2.jpg'

const HomePage = () => {
  return (
    <div className="bg-amazonClone-background pb-4">
      <div className="max-w-[1500px] m-auto">
        <Carousel />
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-80">
          <HomePageCard
            title={"We have a surprise for you"}
            img={home_grid_1}
            link={"See terms and conditions"}
          />
          <HomePageCard
            title={"Watch The Rings of Power"}
            img={home_grid_2}
            link={"Start streaming now"}
          />
          <HomePageCard
            title={"Unlimited Streaming"}
            img={home_grid_3}
            link={"Find out more"}
          />
          <HomePageCard
            title={"More titles to explore"}
            img={home_grid_4}
            link={"Browse Kindle Unlimited"}
          />
          <HomePageCard
            title={"Shop Pet Supplies"}
            img={home_grid_5}
            link={"See more"}
          />
          <HomePageCard
            title={"Spring Sale"}
            img={home_grid_6}
            link={"See the deals"}
          />
          <HomePageCard
            title={"Echo Buds"}
            img={home_grid_7}
            link={"See more"}
          />
          <HomePageCard
            title={"Family Plan: 3 month free"}
            img={home_grid_8}
            link={"Learn more"}
          />
          <div className="m-3 pt-8">
            <img className="xl:hidden" src={banner_image_2} alt="banner_image_2" />
          </div>
        </div>
        <CarouselProduct/>
        <CarouselCategory/>
        <div className="h-[200px]">
          <img className="h-full m-auto" src={banner_image} alt="banner_image" />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
