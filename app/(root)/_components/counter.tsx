"use client";
import React, { useEffect, useState } from "react";
import CountUp from "react-countup";
import Link from "next/link";

const Counter = () => {
  const [counterOn, setCounterOn] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      if (scrollPosition > 1000) {
        setCounterOn(true);
      } else {
        setCounterOn(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <>
      <section className="md:py-20 py-10">
        <div className="container mx-auto">
          <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
            <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd] md:md:p-8 p-4 hover:shadow-xl">
              <h1 className="md:text-4xl text-3xl font-bold">
                {counterOn && (
                  <CountUp start={0} end={4000} duration={2} delay={0} />
                )}
                +
              </h1>
              <h4 className="text-[#050748] lg:text-[25px] sm:text-[20px] text-[18px] leading-[32px] sm:leading-[43px] font-semibold">
                Project Delivered
              </h4>
            </div>
            <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    md:p-8 p-4   hover:shadow-xl">
              <h1 className="md:text-4xl text-3xl font-bold">
                {counterOn && (
                  <CountUp start={0} end={11} duration={2} delay={0} />
                )}
                +
              </h1>
              <h4 className="text-[#050748] lg:text-[25px] sm:text-[20px] text-[18px] leading-[32px] sm:leading-[43px] font-semibold">
                Years Of Experience
              </h4>
            </div>
            <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd]    md:p-8 p-4   hover:shadow-xl">
              <h1 className="md:text-4xl text-3xl font-bold">
                {counterOn && (
                  <CountUp start={0} end={3000} duration={2} delay={0} />
                )}
                +
              </h1>
              <h4 className="text-[#050748] lg:text-[25px] sm:text-[20px] text-[18px] leading-[32px] sm:leading-[43px] font-semibold">
                Happy Client
              </h4>
            </div>
            <div className="group  border hover:border-pink-500 border-gray-200 rounded-xl bg-[#fffbfd] py-4 px-4  hover:shadow-xl text-center">
              <h3 className="text-[#050748] lg:text-[25px] sm:text-[20px] text-[18px] leading-[32px] sm:leading-[43px] font-semibold text-center mb-2">
                Want to Start Project
              </h3>
              <Link href="#" className="btn cursor-pointer">
                Get Cost Estimation for Free
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Counter;
