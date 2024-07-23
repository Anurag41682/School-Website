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

const Home = () => {
  return (
    <section>
      <div className="flex gap-4 m-10">
        <img className="w-20" src={Logo} />
        <p>
          <strong>Springdale Public School</strong>, established in 1995, is a
          premier educational institution dedicated to fostering academic
          excellence, character development, and lifelong learning. Nestled in
          the heart of a vibrant community, Springdale Public School is
          committed to providing a safe, inclusive, and nurturing environment
          for students from kindergarten through twelfth grade.
        </p>
      </div>
      <div className="flex m-10 justify-center">
        <Carousel className="w-1/2 h-1/2 ">
          <CarouselContent className="flex">
            <CarouselItem>
              <Card className="w-full h-full ">
                <CardContent className="p-6">
                  <img src={Image1} alt="img1" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-full h-full">
                <CardContent className="p-6">
                  <img src={Image2} alt="img2" />
                </CardContent>
              </Card>
            </CarouselItem>
            <CarouselItem>
              <Card className="w-full h-full">
                <CardContent className="p-6">
                  <img src={Image3} alt="img3" />
                </CardContent>
              </Card>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};

export default Home;
