"use client";
import Link from "next/link";

import { AiFillMobile } from "react-icons/ai";

export default function Contact() {
  return (
    <>
      <div className="contact sm:py-10 py-8" id="contact">
        <div className="container m-auto">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="col-span-3 lg:pr-10 text-white">
              <h1 className="md:text-[60px] md:leading-[85px] sm:text-5xl text-3xl md:mt-10 max-md:mb-3 leading-snug font-bold">
                Together, Let&apos;s Make A Difference.
              </h1>
              <div className="flex items-start gap-3 bg-black rounded-md md:p-5 p-3">
                <div className="iconBox">
                  <AiFillMobile className="text-3xl" />
                </div>
                <div className="flex flex-col sm:gap-5 gap-1">
                  <p className="text-xl sm:text-[14px] font-semibold">
                    Speak with a strategist:
                  </p>
                  <Link
                    className="text-sm md:leading-[42px] md:text-[32px] font-bold"
                    href="#"
                  >
                    +91 90044 66166 / +91 9773375525
                  </Link>
                </div>
              </div>
            </div>
            <div className="relative col-span-2">
              <form className="bg-white rounded-md shadow-lg w-full sm:my-8 my-5 py-5 px-5  flex flex-col gap-4 sm:gap-10 lg:absolute ">
                <h2 className="heading text-center">Enquire Now</h2>
                <div className="form_field flex flex-col  sm:gap-2">
                  <label htmlFor="name" className="inline-block  mb-0">
                    Your Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                  />
                </div>
                <div className="form_field flex flex-col gap-2">
                  <label className="inline-block  mb-0" htmlFor="email">
                    Your Email <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                  />
                </div>
                <div className="form_field flex flex-col gap-2">
                  <label className="inline-block  mb-0" htmlFor="mobile">
                    Mobile No <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="number"
                    name="number"
                    id="mobile"
                    required
                    className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                  />
                </div>
                <div className="form_field flex flex-col gap-2">
                  <label className="inline-block  mb-0" htmlFor="company">
                    Company Name <span className="text-red-600">*</span>
                  </label>
                  <input
                    type="text"
                    name="companyName"
                    id="name"
                    required
                    className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                  />
                </div>
                <div className="form_field flex flex-col gap-2">
                  <label className="inline-block  mb-0" htmlFor="message">
                    Message <span className="text-red-600">*</span>
                  </label>
                  <textarea
                    className="border-b py-2 px-3  focus:border-b-blue-600  text-base outline-none"
                    name=""
                    id=""
                  ></textarea>
                </div>
                <button className="btn no-underline relative border-none text-lg font-medium text-white py-2 px-6 rounded-md">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="location sm:py-14 py-8 sm:pr-5">
        <div className="container m-auto">
          <div className="grid text-[#444] grid-cols-1 lg:grid-cols-5 gap-0">
            <div className="col-span-3">
              <div className="location_box rounded-md mb-4 overflow-hidden sm:p-8 p-3 flex flex-col  gap-1">
                <h1 className="md:text-xl text-lg font-extrabold">
                  Registered Office
                </h1>
                <p className="desc">
                  <b>Address:</b> Shop no 2, Mohd Hussain Compound, Near
                  Maharashtra Weight Bridge, L.B.S. Marg, Kurla(W), Mumbai –
                  400070.
                </p>
                <p className="desc">
                  <b>Mobile No:</b> +91 90290 75525
                </p>
                <p className="desc">
                  <b>Email:</b> info@nexgeno.in{" "}
                </p>
              </div>
              <div className="location_box rounded-md mb-4 overflow-hidden sm:p-8 p-3 flex flex-col  gap-1">
                <h1 className="md:text-xl text-lg font-extrabold">
                  Development office
                </h1>
                <p className="desc">
                  <b>Address:</b> Unit No. F-50, First Floor kohinoor City Mall
                  Opp Holly Cross School, Kurla (West) Mumbai, Maharashtra -
                  400070.
                </p>
                <p className="desc">
                  <b>Mobile No:</b> +91 90044 66166
                </p>
                <p className="desc">
                  <b>Email:</b> sales@nexgeno.in
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
