import Image from "next/image";

const Stories = () => {
  return (
    <>
      <section className="bg-[#fffbfd] md:py-20 py-10">
        <div className="container mx-auto">
          <h1 className="heading mb-10">Client Success Stories</h1>
          <div className="grid lg:grid-cols-3 gap-5">
            <div className="border-[1px] w-full rounded-2xl bg-white hover:border-pink-600">
              <div className="relative w-full h-[300px]  ">
                <Image
                  src="/POST 2.jpg"
                  alt="project image"
                  fill={true}
                  priority
                  className="rounded-t-2xl object-cover"
                />
              </div>
              <div className="md:py-14 py-5 md:px-10 px-5">
                <h2 className="heading mb-5">AbayaDesigner</h2>
                <p className="desc line-clamp-4">
                  To overcome the challenges, the design team focused on
                  creating a clean, minimalist, and modern design that could
                  provide a seamless browsing experience for the customers. The
                  website was designed with a user-friendly interface that
                  allowed customers to easily navigate through the different
                  categories of Abayas, filter them by style, color, and size,
                  and view detailed product descriptions and images.
                </p>
              </div>
            </div>
            <div className="lg:col-span-2">
              <div className="grid lg:grid-cols-2 border-[1px] hover:border-pink-600 rounded-2xl bg-white">
                <div>
                  <div className="md:py-14 py-5 md:px-10 px-5">
                    <h2 className="heading mb-5">V2 Technologies</h2>
                    <p className="desc line-clamp-4">
                      We started by analyzing the company business goals, target
                      audience, and competitors to understand their needs and
                      requirements. We then created a wireframe and design
                      concepts that would provide a better user experience and
                      make the website more engaging.
                    </p>
                  </div>
                </div>
                <div>
                  <div className="relative w-full h-[300px]  ">
                    <Image
                      src="/v2.jpg"
                      alt="project image"
                      fill={true}
                      priority
                      className="md:rounded-r-2xl max-md:rounded-b-2xl object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="grid lg:grid-cols-2 border-[1px] hover:border-pink-600 rounded-2xl mt-5 bg-white">
                <div>
                  <div className="relative w-full h-[300px]  ">
                    <Image
                      src="/POST .1.jpg"
                      alt="project image"
                      fill={true}
                      priority
                      className="md:rounded-l-2xl max-md:rounded-t-2xl object-cover"
                    />
                  </div>
                </div>
                <div>
                  <div className="md:py-14 py-5 md:px-10 px-5">
                    <h2 className="heading mb-5">KUC Edibles</h2>
                    <p className="desc line-clamp-4">
                      To achieve the project objectives, the KUC Edibles team
                      worked with our team of designers, developers, and
                      marketers to create a brand and website that would be both
                      visually appealing and easy to use. Our team started by
                      conducting extensive research on the cannabis industry and
                      its target audience to gain
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Stories;
