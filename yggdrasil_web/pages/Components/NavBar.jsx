import Image from "next/image";
import React from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons-ai";

const NavBar = () => {
  return (
      <div className="fixed w-full h-20 bg-slate-300 shadow-xl z-[100]">
          <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
            <Image
              src="/../public/NavLogo.jpg"
              alt="/"
              width="125"
              height="125"
            />
          </div>
          <ul className="hidden md:flex">
            <Link href="/">
              <li className="ml-10 text sm uppercase hover:border-b">Home</li>
            </Link>
            <Link href="/about">
              <li className="ml-10 text sm uppercase hover:border-b">About</li>
            </Link>
            <Link href="/gallery">
              <li className="ml-10 text sm uppercase hover:border-b">
                Gallery
              </li>
            </Link>
            <Link href="/chat">
            <li className="ml-10 text sm uppercase hover:border-b">
                Gallery
              </li>
            </Link>
            <Link href="/contact">
              <li className="ml-10 text sm uppercase hover:border-b">
                Contact
              </li>
            </Link>
            <Link href="/signin">
              <li className="ml-10 text sm uppercase hover:border-b">
                Sign In
              </li>
            </Link>
          </ul>
          </div>

</>
<div className="md:hidden">
        <AiOutlineMenu />
      </div>
}

export default NavBar;
