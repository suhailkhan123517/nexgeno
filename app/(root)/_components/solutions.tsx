import Image from "next/image";
import { solutions } from "@/lib/data";

const Solutions = () => {
  return (
    <>
      <section className="md:mb-20  mb-10 md:py-16 py-8   bg-[#fffbfd]">
        <div className="container mx-auto">
          <h2 className="heading text-center ">
            Unleashing Innovation with <br /> Our Technology
          </h2>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1  place-items-start xl:gap-10 gap-3 mt-14">
            {solutions.map((item) => (
              <div
                key={item.id}
                className="border bg-white hover:border-pink-600 hover:shadow-xl transition duration-200 rounded-2xl   xl:h-[218px] lg:h-[330px] flex  flex-col xl:px-6 px-4 py-8"
              >
                <div className=" flex items-center xl:flex-row flex-col  gap-4">
                  <div className="w-28">
                    <div className="w-24 h-24 rounded-ful  relative">
                      <Image
                        src={item.img}
                        alt="Hire Developer Icon"
                        fill={true}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-black mb-2 px-2 ">
                      {item.title} <br className="max-md:hidden" /> Solutions
                    </h3>
                    <p className="desc mb-4 px-2">{item.desc}</p>
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

export default Solutions;
