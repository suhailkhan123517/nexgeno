import Link from "next/link";
import React from "react";

const CallToAction = () => {
  return (
    <>
      <section className="md:mb-20 -scroll-mb-10">
        <div className="container mx-auto">
          <div className="md:py-16 py-8 border border-pink-500 bg-[#fffbfd]  px-6 rounded-lg flex flex-col gap-5 items-center justify-center">
            <h2 className="heading text-center">
              Let&apos;s Discuss Your Project
            </h2>
            <p className="text-center text-lg">
              Let us know your project idea and Get free consultation to turn it
              into an amazing digital product.
            </p>
            <Link href="#" className="btn cursor-pointer">
              Talk To Our Expert
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default CallToAction;
