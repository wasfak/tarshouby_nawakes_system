"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import img from "../public/82a44949-7cfb-4c1f-8c08-6853d6d8011d.jpeg";

const Navbar = () => {
  const pathName = usePathname();

  return (
    <nav className="bg-[#080808] p-4 flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center rounded-full">
          <Image src={img} alt="logo" width={70} height={50} />
        </div>
      </Link>

      <div className="flex-grow flex justify-center text-white">
        <Link
          href="/exp"
          className={
            pathName === "/exp"
              ? "mx-2 flex items-center justify-center rounded-md text-[#00ffee] p-2 transition duration-300"
              : "mx-2 flex items-center justify-center  rounded-md  p-2 transition duration-300"
          }
        >
          مراجعة الاكسبير
        </Link>
        <Link
          href="/form"
          className={
            pathName === "/form"
              ? "mx-2 flex items-center justify-center rounded-md text-[#00ffee] p-2 transition duration-300"
              : "mx-2 flex items-center justify-center  rounded-md  p-2 transition duration-300"
          }
        >
          اضافة كود للبحث ف المخازن
        </Link>
        <Link
          href="/search"
          className={
            pathName === "/search"
              ? "mx-2 flex items-center justify-center rounded-md text-[#00ffee] p-2 transition duration-300"
              : "mx-2 flex items-center justify-center  rounded-md  p-2 transition duration-300"
          }
        >
          الاصناف المطلوبة من زملاء المشتريات
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
