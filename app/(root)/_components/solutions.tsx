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
                className="border bg-white hover:border-pink-600 hover:shadow-xl transition duration-200 rounded-2xl px-3 py-5"
              >
                <div className="flex items-center xl:flex-row flex-col  gap-2">
                  <div className="w-24">
                    <div className="w-16 h-16 relative">
                      <Image
                        src={item.img}
                        alt="Hire Developer Icon"
                        fill={true}
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-black mb-2 px-2 ">
                      {item.title} <br className="max-md:hidden" />
                    </h3>
                    <p className="desc  px-2 line-clamp-2 ">{item.desc}</p>
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
