import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <>
      <section className="md:mb-24 mb-12">
        <div className="container mx-auto ">
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-5">
            <div className="rounded-3xl md:hidden">
              <div className="w-full md:h-[500px] h-[300px] relative rounded-3xl">
                <Image
                  src="/who.webp"
                  alt="Who Are  WE Image"
                  fill={true}
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
            <div className="border border-gray-200 hover:border-pink-500 sm:py-8  py-5 lg:px-10 sm:px-10 px-4 rounded-3xl hover:border-gradient-to-r from-pink-500 to-purple-600">
              <p className="text-pink-600 text-lg font-medium">Who We Are</p>

              <h1 className="heading py-4 ">
                We are your digital partner to create inspirational design and
                robust solution for Web, Mobile & Cloud.
              </h1>

              <p className="desc my-5">
                Nexgeno is a web and mobile app development company dedicated to
                providing innovative and custom solutions to businesses of all
                sizes. We are a team of creative designers and expert developers
                who design, develop, and deliver digital products to enhance
                user engagement, improve brand awareness, and drive business
                growth. From digital product design to development, our
                on-demand Agile product team will ensure that your digital
                product stands out in today&apos;s competitive market.
              </p>

              <div className="mt-10">
                <Link href="#" className="btn cursor-pointer">
                  Get In Touch
                </Link>
              </div>
            </div>
            <div className="rounded-3xl max-md:hidden">
              <div className="w-full md:h-[500px] h-[300px] relative rounded-3xl">
                <Image
                  src="/who.webp"
                  alt="Who Are  WE Image"
                  fill={true}
                  className="object-cover rounded-3xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
