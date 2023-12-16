import { ecommerceClientLogo } from "@/lib/data";
import Image from "next/image";

export default function Client() {
  return (
    <>
      <section className="md:py-20 py-10">
        <div className="container m-auto">
          <div className="grid md:grid-cols-6 md:gap-0  grid-cols-3  place-items-center">
            {ecommerceClientLogo.map((item) => (
              <div
                key={item.id}
                className="relative xl:h-24 xl:w-36 lg:h-20 lg:w-28 h-16 w-24 md:mt-0 mt-8"
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill={true}
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
