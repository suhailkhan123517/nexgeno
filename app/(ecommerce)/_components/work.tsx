"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay } from "swiper/modules";
import Image from "next/image";
import { WorkData } from "@/lib/data";

const Work = () => {
  return (
    <>
      <section className="md:py-20 py-10">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="heading">Our Recent Work</h2>
          </div>
          <div className="">
            <Swiper
              breakpoints={{
                640: {
                  slidesPerView: 1.2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 1.8,
                  spaceBetween: 40,
                },
                1024: {
                  slidesPerView: 2.3,
                  spaceBetween: 50,
                },
              }}
              autoplay={{
                delay: 2500,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
            >
              {WorkData.map((item) => (
                <SwiperSlide key={item.id}>
                  <div className="relative h-52 md:h-96 ">
                    <Image
                      src={item.img}
                      alt="Project Image"
                      fill
                      className="object-cover rounded-xl shadow-lg"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
