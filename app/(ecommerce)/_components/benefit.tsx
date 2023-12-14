import Image from "next/image";

const Benefit = () => {
  return (
    <>
      <section className="bg-[#fffbfd] md:py-16 py-8">
        <div className="container mx-auto">
          <h2 className="heading text-center ">
            Benefits of Having an <br /> E-Commerce Website
          </h2>
          <div className="grid grid-cols-6 gap-5 mt-10">
            <div className="flex items-center  flex-col gap-2 text-center">
              <div className="h-[150px]">
                <Image
                  width={140}
                  height={150}
                  alt=""
                  src="/ecommerce/faster_buying_procces-1.png"
                />
              </div>

              <h5 className="font-bold">Faster Buying Process</h5>
            </div>
            <div className="flex items-center  flex-col gap-2 text-center">
              <div className="h-[150px]">
                <Image
                  width={140}
                  height={150}
                  alt=""
                  src="/ecommerce/creatiblity_images.png"
                />
              </div>

              <h5 className="font-bold">Affordable Advertising & Marketing</h5>
            </div>
            <div className="flex items-center  flex-col gap-2 text-center">
              <div className="h-[150px]">
                <Image
                  width={140}
                  height={150}
                  alt=""
                  src="/ecommerce/market_expansion.png"
                />
              </div>

              <h5 className="font-bold">Flexibility for Customers</h5>
            </div>
            <div className="flex items-center  flex-col gap-2 text-center">
              <div className="h-[150px]">
                <Image
                  width={140}
                  height={150}
                  alt=""
                  src="/ecommerce/noreachable_limitation-1.png"
                />
              </div>

              <h5 className="font-bold">No Reach Limitations</h5>
            </div>
            <div className="flex items-center  flex-col gap-2 text-center">
              <div className="h-[150px]">
                <Image
                  width={140}
                  height={150}
                  alt=""
                  src="/ecommerce/grpwth_opportunity.png"
                />
              </div>

              <h5 className="font-bold">
                Faster Response to Buyer/Market Demands
              </h5>
            </div>
            <div className="flex items-center  flex-col gap-2 text-center">
              <div className="h-[150px]">
                <Image
                  width={140}
                  height={150}
                  alt=""
                  src="/ecommerce/payments_icons.png"
                />
              </div>

              <h5 className="font-bold">Several Payment Modes</h5>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Benefit;
