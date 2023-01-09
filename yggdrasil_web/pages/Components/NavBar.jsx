import Image from "next/image"
import react from "react"
import Link from "next/link"

const NavBar = () => {
  //return
  ;<div className="fixed w-full h-20 shadow xl z-[100]">
    <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
      <Image
        src="../public/assets/NavLogo.png"
        alt="/"
        width="125"
        height="125"
      />
    </div>
    <ul>
      <Link href="/">
        <li className="ml-10 text sm uppercase hover:border-b">Home</li>
      </Link>
      <Link href="/">
        <li className="ml-10 text sm uppercase hover:border-b">About</li>
      </Link>
      <Link href="/">
        <li className="ml-10 text sm uppercase hover:border-b">Gallery</li>
      </Link>
      <Link href="/">
        <li className="ml-10 text sm uppercase hover:border-b">Chat</li>
      </Link>
      <Link href="/">
        <li className="ml-10 text sm uppercase hover:border-b">Contact</li>
      </Link>{" "}
      <Link href="/">
        <li className="ml-10 text sm uppercase hover:border-b">Contact</li>
      </Link>
    </ul>
  </div>
}

export default NavBar
