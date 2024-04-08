"use client";

import React from "react";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Image from "next/image";

const HomepageFeature = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true }),
  );

  const HERO_IMAGE = [
    {
      title: "The best of the best",
      image: "/images/hero-sragen-1.jpg",
    },
    {
      title: "The best of the best 2",
      image: "/images/hero-sragen-2.jpg",
    },
    {
      title: "The best of the best 3",
      image: "/images/hero-sragen-3.jpg",
    },
  ];

  return (
    <main>
      <section className="py-10">
        <div className="container h-[100vh]">
          <Carousel
            plugins={[plugin.current]}
            className="w-full"
            onMouseEnter={plugin.current.stop}
            onMouseLeave={plugin.current.reset}
          >
            <CarouselContent>
              {HERO_IMAGE.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="relative h-[400px] w-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={800}
                      height={400}
                      className="absolute inset-0 h-full w-full object-cover object-center"
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>
      </section>
    </main>
  );
};

export default HomepageFeature;
