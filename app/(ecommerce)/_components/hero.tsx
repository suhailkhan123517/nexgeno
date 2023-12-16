import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero_section xl:py-16 py-5 h-full">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 grid-cols-1 ">
            <div className="col-span-3">
              <h1 className="xl:text-7xl  md:text-5xl  text-4xl font-semibold  bg-gradient-to-r from-cyan-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop-shadow-md md:mb-3 mb-5">
                Web Design for <br /> E-Commerce
              </h1>
              <h1 className="xl:text-5xl  md:text-4xl  text-2xl font-semibold lg:mt-0 md:mt-5 mt-3 max-md:mb-5">
                We Create Stunning <br /> Online Stores
              </h1>

              <p className="md:mt-5 mt-2 md:pr-28 max-md:hidden">
                You can reach millions of customers with peace of mind. Thanks
                to high performance and high quality. Improve your ROI and
                customer experience with up to 90% faster speeds.
              </p>

              <div className="flex flex-row gap-5 md:mt-10 mt-5">
                <Link href="#" className="btn cursor-pointer">
                  Contact
                </Link>
                <Link href="tel:9760989370" className="outline_btn">
                  Call Us Now
                </Link>
              </div>
            </div>
            <div className="col-span-2 xl:px-10">
              <form className="shadow-xl flex flex-col xl:px-14 md:px-10 px-5 xl:py-20 md:py-14 py-8 gap-7 rounded-lg  bg-white lg:mt-0 mt-10">
                <p className="md:text-3xl text-2xl font-semibold leading-tight">
                  Get a Free Enquire Now
                </p>
                <input
                  type="text"
                  className="border-b py-2 px-3 focus:border-b-blue-600    text-base outline-none"
                  placeholder="Contact Person Name"
                />
                <input
                  type="number"
                  className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                  placeholder="Mobile / Phone No"
                />
                <input
                  type="text"
                  className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                  placeholder="Email Address"
                />
                <button
                  type="submit"
                  className="btn flex items-center justify-center"
                >
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
