"use client";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import { testimonial } from "@/lib/data";

const Testimonial = () => {
  return (
    <>
      <section className="md:mb-24 md:py-14 mb-12 py-7  bg-[#fffbfd]">
        <div className="container mx-auto">
          <div className="flex justify-between items-center mb-10">
            <h2 className="heading">Our Testimonial</h2>
          </div>

          <Swiper
            breakpoints={{
              640: {
                slidesPerView: 1.2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2.2,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3.2,
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
            {testimonial.map((item) => (
              <SwiperSlide key={item.id}>
                {" "}
                <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                  <div className="flex justify-between items-center">
                    <div className="flex items-center gap-5">
                      <Image
                        src={item.img}
                        alt="client image"
                        priority
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div>
                        <h3 className="text-xl font-semibold">{item.name}</h3>
                        <p>{item.country}</p>
                      </div>
                    </div>
                    <div className="star_rating text-yellow-500 flex flex-row gap-1 items-center">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>
                  </div>

                  <div className="mt-10">{item.comment}</div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
