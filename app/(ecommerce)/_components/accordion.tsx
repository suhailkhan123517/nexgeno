"use client";
import { useState } from "react";
import AccordionItem from "./accordionItem";
import { ecommerceAccordions } from "@/lib/data";

const Accordion = () => {
  const [open, setOpen] = useState<number | null>(null);

  const toggle = (index: any) => {
    if (open === index) {
      return setOpen(null);
    }

    setOpen(index);
  };
  return (
    <>
      <div className="md:my-20 my-10">
        <div className="container m-auto md:py-10 sm:pt-10 md:pt-0">
          <h1 className="text-center text-blue-950 md:text-3xl text-xl font-bold">
            Frequently Asked Questions
          </h1>
          <div className="grid place-items-center mt-10">
            <div className="max-w-6xl">
              {ecommerceAccordions.map((data, index) => {
                return (
                  <AccordionItem
                    key={index}
                    open={index === open}
                    title={data.question}
                    desc={data.answer}
                    toggle={() => toggle(index)}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Accordion;
