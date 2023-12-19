import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero_section xl:py-16 py-5 h-full">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 grid-cols-1 ">
            <div className="col-span-3">
              <h1 className="xl:text-7xl  md:text-5xl  text-4xl font-semibold  bg-gradient-to-r from-cyan-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop-shadow-md md:mb-3 mb-5  max-md:text-center">
                Web Design for <br /> E-Commerce
              </h1>
              <h1 className="xl:text-5xl max-md:text-center  md:text-4xl  text-2xl font-semibold lg:mt-0 md:mt-5 mt-3 max-md:mb-5">
                We Create Stunning <br /> Online Stores
              </h1>

              <p className="md:mt-5 mt-2 md:pr-28 max-md:hidden">
                You can reach millions of customers with peace of mind. Thanks
                to high performance and high quality. Improve your ROI and
                customer experience with up to 90% faster speeds.
              </p>

              <div className="flex flex-row gap-5 md:mt-10 mt-5 max-md:justify-center">
                <Link href="#" className="btn cursor-pointer">
                  Contact
                </Link>
                <Link href="tel:9760989370" className="outline_btn">
                  Call Us Now
                </Link>
              </div>
            </div>
            <div className="col-span-2 xl:px-10 md:mt-0 mt-10">
              <div className="border-[1px] rounded-lg border-pink-600 flex flex-col bg-white md:pt-10 pt-4 md:pb-7 pb-2">
                <p className="text-xl text-center  font-semibold leading-tight">
                  Get a Free Enquire Now
                </p>
                <iframe
                  className="h-[430px]"
                  src="https://mcrm.nexgeno.in/forms/wtl/251edc4899ec1207979e1f8770cdffe8"
                  sandbox="allow-top-navigation allow-forms allow-same-origin allow-popups"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
