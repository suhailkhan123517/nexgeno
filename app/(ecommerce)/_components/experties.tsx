import { BsArrowRight } from "react-icons/bs";
import Image from "next/image";

import { ecommerceExpert } from "@/lib/data";

const Expert = () => {
  return (
    <>
      <section className="md:mb-24 mb-12">
        <div className="container mx-auto">
          <h2 className="heading text-center ">
            Our Expertise in E-Commerce <br /> Website Development
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-start xl:gap-10 gap-3 md:my-14 my-7">
            {ecommerceExpert.map((item) => (
              <div
                key={item.id}
                className="border-[1px] hover:border-pink-600 hover:shadow-xl transition duration-200 rounded-2xl   flex items-center flex-col"
              >
                <div className=" bg-[#fffbfd] border-b w-full py-5 px-3 rounded-2xl flex xl:flex-row flex-col gap-2 items-center">
                  <div className="w-24">
                    <div className="w-16 h-16 rounded-ful  relative">
                      <Image
                        src={item.img}
                        alt="Hire Developer Icon"
                        fill={true}
                      />
                    </div>
                  </div>

                  <div>
                    <h3 className="text-base font-semibold text-black mb-2 px-2">
                      {item.title}
                    </h3>
                    <p className="desc mb-4 px-2 line-clamp-3">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Expert;
