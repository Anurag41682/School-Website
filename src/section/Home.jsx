import React from "react";
import Logo from "../assets/logo.png";
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

import { Card, CardContent } from "@/components/ui/card";

const data = [{ image: Image1 }, { image: Image2 }, { image: Image3 }];

const Home = () => {
  return (
    <section className="text-slate-100 px-20 my-20">
      <div className="flex gap-4">
        <img className="w-20" src={Logo} />
        <div>
          <strong className="text-3xl">Springdale Public School</strong>,
          <p className="leading-6 tracking-wider">
            established in 1995, is a premier educational institution dedicated
            to fostering academic excellence.
          </p>
        </div>
      </div>
      <div className="flex text-black  justify-center mt-10">
        <Carousel className="w-1/2 h-1/2 ">
          <CarouselContent className="flex ">
            {data.map((item, index) => {
              return (
                <CarouselItem key={index}>
                  <Card className="w-full h-full ">
                    <CardContent className="p-6">
                      <img src={item.image} alt={item.image} />
                    </CardContent>
                  </Card>
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
