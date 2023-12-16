"use client";
import React from "react";
import { Collapse } from "react-collapse";
import {
  IoIosRemoveCircleOutline,
  IoIosAddCircleOutline,
} from "react-icons/io";

interface AccordionItemProps {
  open: boolean;
  toggle: () => void;
  title: string;
  desc: string;
}

const AccordionItem = ({ open, toggle, title, desc }: AccordionItemProps) => {
  return (
    <>
      <div className="border-b">
        <div
          className="py-5 md:px-10 px-5 flex justify-between items-center cursor-pointer "
          onClick={toggle}
        >
          <p className="md:text-xl text-base font-semibold">{title}</p>
          <div>
            {open ? (
              <>
                <IoIosRemoveCircleOutline className="w-5 h-5" />
              </>
            ) : (
              <>
                <IoIosAddCircleOutline className="w-5 h-5" />
              </>
            )}
          </div>
        </div>
        <Collapse isOpened={open}>
          <div className="desc md:px-12 px-5 pb-7">{desc}</div>
        </Collapse>
      </div>
    </>
  );
};

export default AccordionItem;
