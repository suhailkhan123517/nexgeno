"use client";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

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
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/sonali.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Sonali Vaidya</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Great team! They are super flexible, responsive, and detailed.
                  Nexgeno Technology helped us launch an entirely new website -
                  their module system is amazing. As someone who is not an
                  expert in managing a website I am glad I can rely on Nexgeno
                  Technology to help me and give advice on best practices. Would
                  highly recommend!
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/r.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Rajesh Oberoi</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Working with Nexgeno technology pvt ltd on my site was such a
                  pleasure. Arif and his team always so friendly, professional,
                  and happy to help me with any questions and concerns about my
                  site. I would definitely recommend her to anyone looking for a
                  professional web designer for their project.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/omar.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Omar S</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Best for App development company, we have something different
                  type of requirements but they where able to understand and it
                  was great to communicate from there team as per our time zone,
                  we are located at South Africa Durban but pleasure working
                  with them.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/sonali.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Sonali Vaidya</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Great team! They are super flexible, responsive, and detailed.
                  Nexgeno Technology helped us launch an entirely new website -
                  their module system is amazing. As someone who is not an
                  expert in managing a website I am glad I can rely on Nexgeno
                  Technology to help me and give advice on best practices. Would
                  highly recommend!
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/r.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Rajesh Oberoi</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Working with Nexgeno technology pvt ltd on my site was such a
                  pleasure. Arif and his team always so friendly, professional,
                  and happy to help me with any questions and concerns about my
                  site. I would definitely recommend her to anyone looking for a
                  professional web designer for their project.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/omar.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Omar S</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Best for App development company, we have something different
                  type of requirements but they where able to understand and it
                  was great to communicate from there team as per our time zone,
                  we are located at South Africa Durban but pleasure working
                  with them.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/sonali.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Sonali Vaidya</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Great team! They are super flexible, responsive, and detailed.
                  Nexgeno Technology helped us launch an entirely new website -
                  their module system is amazing. As someone who is not an
                  expert in managing a website I am glad I can rely on Nexgeno
                  Technology to help me and give advice on best practices. Would
                  highly recommend!
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/r.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Rajesh Oberoi</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Working with Nexgeno technology pvt ltd on my site was such a
                  pleasure. Arif and his team always so friendly, professional,
                  and happy to help me with any questions and concerns about my
                  site. I would definitely recommend her to anyone looking for a
                  professional web designer for their project.
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <div className="border-[1px] bg-white hover:border-pink-600 py-8 px-5 rounded-xl h-[350px]">
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-5">
                    <Image
                      src="/omar.png"
                      alt="client image"
                      priority
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Omar S</h3>
                      <p>India</p>
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

                <div className="mt-10">
                  Best for App development company, we have something different
                  type of requirements but they where able to understand and it
                  was great to communicate from there team as per our time zone,
                  we are located at South Africa Durban but pleasure working
                  with them.
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
