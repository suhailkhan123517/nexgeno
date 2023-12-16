"use client";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };
  return (
    <>
      <nav
        className={cn(
          "sticky top-0 w-full z-40 py-2",
          isVisible && "bg-[#fffbfd]"
        )}
      >
        <div className="container  mx-auto">
          <div className="flex items-center  justify-between">
            <Link href="/">
              <div className="relative w-[200px] h-[50px]">
                <Image
                  src="/logo.webp"
                  alt="Nexgeno Logo"
                  fill={true}
                  className="object-contain"
                />
              </div>
            </Link>
            <div className="flex items-center gap-10">
              <ul>
                <li className="text-xl max-md:hidden font-semibold">
                  + 27738679358{" "}
                </li>
              </ul>
              <button className="btn max-md:hidden">Get Quick Quote</button>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
