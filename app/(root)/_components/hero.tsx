import Link from "next/link";

const Hero = () => {
  return (
    <>
      <section className="hero_section xl:py-16 py-5 h-full">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-5 grid-cols-1 ">
            <div className="col-span-3">
              <h1 className="xl:text-7xl  md:text-5xl  text-4xl font-semibold  bg-gradient-to-r from-cyan-400 via-pink-500 to-pink-600 bg-clip-text text-transparent drop-shadow-md md:mb-3 mb-5  max-md:text-center">
                Innovative web solutions
              </h1>
              <h1 className="xl:text-5xl max-md:text-center  md:text-4xl  text-2xl font-semibold lg:mt-0 md:mt-5 mt-3 max-md:mb-5">
                for modern businesses
              </h1>
              <p className="md:text-2xl font-medium  mt-2 md:mt-5 max-md:text-center max-md:mb-4">
                Connecting businesses to the digital world
              </p>
              <p className="md:mt-5 mt-2 md:pr-28 max-md:hidden">
                Are you ready to transform your online presence and captivate
                your audience with stunning, user-friendly websites? At Nexgeno
                Technology, we are your digital partners dedicated to delivering
                innovative and customized website design solutions that can
                elevate your business to new heights.
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
            <div className="col-span-2 xl:px-10">
              <form className="shadow-xl flex flex-col xl:px-14 md:px-10 px-5 xl:py-20 md:py-14 py-8 gap-7 rounded-lg  bg-white lg:mt-0 mt-10">
                <p className="md:text-2xl text-xl text-center font-semibold leading-tight">
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
