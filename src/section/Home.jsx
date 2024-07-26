import React from "react";
import Logo from "../assets/logo.jpg";
import Image1 from "../assets/homeCarousel-1.jpg";
import Image2 from "../assets/homeCarousel-2.jpg";
import Image3 from "../assets/homeCarousel-3.jpg";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const data = [{ image: Image1 }, { image: Image2 }, { image: Image3 }];

const Home = () => {
  return (
    <section className="text-slate-100 px-20 my-20 max-md:px-5">
      <div className="flex gap-4 max-sm:flex-col">
        <img className="w-20 rounded-full" src={Logo} />
        <div>
          <strong className="text-3xl max-md:text-2xl max-sm:text-sm">
            Springdale Public School
          </strong>
          <p className="leading-6 tracking-wider  max-md:text-sm max-md:leading-5 max-sm:text-xs ">
            Welcome to Springdale Public School, where we nurture young minds
            for a brighter future.
          </p>
        </div>
      </div>
      <div className="flex text-black justify-center mt-10">
        <Carousel>
          <CarouselContent className="w-[70vw] h-[70vh] max-sm:w-[50vw] max-sm:h-[50vh] ">
            {data.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <img
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt={item.image}
                  />
                </CarouselItem>
              );
            })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
