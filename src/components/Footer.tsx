import React from "react";
import Container from "./Container";
import Logo from "./Logo";
import { navigation } from "@/constants/data";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-[#180735] mt-10 text-zinc-300 w-full max-w-full">
      <Container className="flex flex-col md:flex-row items-center justify-between">
        <Logo className="text-white" spanClassName="bg-white text-black" />
        <ul className="flex flex-wrap gap-6 items-center justify-center md:justify-end mt-4 md:mt-0">
          {navigation.map((item) => (
            <Link href={item?.href} key={item?._id}>
              <li className="hover:text-white duration-200">{item?.title}</li>
            </Link>
          ))}
        </ul>
        <p className="text-center md:text-right mt-4 md:mt-0">
          © Copyright 2024, Designed by Group 9
        </p>
      </Container>
    </div>
  );
};

export default Footer;
