import Image from "next/image";
import Link from "next/link";

const WhyUs = () => {
  return (
    <>
      <section className="md:mb-24 mb-12">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="rounded-3xl">
              <div className="w-full md:h-[500px] h-[300px] relative rounded-3xl">
                <Image
                  src="/why.webp"
                  alt="Why Choose Us Image"
                  fill={true}
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="border border-gray-200 hover:border-pink-500 sm:py-8  py-5 lg:px-10 sm:px-10 px-4 rounded-3xl hover:border-gradient-to-r from-pink-500 to-purple-600">
              <p className="text-pink-600 text-lg font-medium">Why Choose Us</p>

              <h1 className="heading py-4 ">Why Choose Nexgeno Technology?</h1>

              <ul className="list-disc pl-5 flex flex-col gap-3 mt-5">
                <li className="md:text-xl  font-semibold">
                  Experienced Professionals
                </li>
                <li className="md:text-xl  font-semibold">Custom Solutions</li>
                <li className="md:text-xl  font-semibold">
                  Innovation and Excellence
                </li>
                <li className="md:text-xl  font-semibold">
                  Communication and Collaboration
                </li>
                <li className="md:text-xl  font-semibold">
                  Customer Satisfaction
                </li>
              </ul>

              <div className="mt-10">
                <Link href="contact" className="btn cursor-pointer">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WhyUs;
