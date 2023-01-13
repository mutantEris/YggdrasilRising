/** @format */

import Image from "next/image";
import React, { useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav);
	};
	return (
		<div className='fixed w-full h-4 bg-[#998A] shadow-xl z-[100]'>
			<div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
				<Image src='/../public/NavLogo.jpg' alt='/' width='25' height='25' />
				<div>
					<ul className='hidden md:flex'>
						<Link href='/'>
							<li className='ml-10 text sm uppercase hover:border-b'>Home</li>
						</Link>
						<Link href='/about'>
							<li className='ml-10 text sm uppercase hover:border-b'>About</li>
						</Link>
						<Link href='/gallery'>
							<li className='ml-10 text sm uppercase hover:border-b'>
								Gallery
							</li>
						</Link>
						<Link href='/contact'>
							<li className='ml-10 text sm uppercase hover:border-b'>
								Contact
							</li>
						</Link>
						<Link href='/chat'>
							<li className='ml-10 text sm uppercase hover:border-b'>Chat</li>
						</Link>
						<Link href='/signin'>
							<li className='ml-10 text sm uppercase hover:border-b'>
								Sign In
							</li>
						</Link>
					</ul>
					<div onClick={handleNav} className='md:hidden'>
						<AiOutlineMenu size={25} />
					</div>
				</div>
			</div>
			<div
				className={nav ? "fixed left-0 top-0 w-full h-screen bg-black/70" : ""}
			>
				<div>
					<div
						className={
							nav
								? "md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f1] p-10 ease-in duration-500"
								: "fixed left-[-100%] top-0 p-10 ease-in duration-500"
						}
					>
						<div className='flex w-full items-center justify-between'>
							<Image
								src='/../public/NavLogo.jpg'
								alt='/'
								width='75'
								height='75'
							/>
							<div>
								<div
									onClick={handleNav}
									className='rounded-full shadow-lg shadow-gray-400 p-3
							curser-pointer'
								>
									<AiOutlineClose />
									<div className='border-b border-gray-300 my-4'>
										<p className='w-[85] md:w-[90] py-4'>
											Welome to Yggdrasil Rising
										</p>
										<div className='py-4 flex flex-col'>
											<ul className='uppercase'>
												<Link href='/'>
													<li className='py-4 text-sm'>Home</li>
												</Link>
												<Link href='/about'>
													<li className='py-4 text-sm'>About</li>
												</Link>
												<Link href='/gallery'>
													<li className='py-4 text-sm'>Gallery</li>
												</Link>
												<Link href='/contact'>
													<li className='py-4 text-sm'>Contact</li>
												</Link>
												<Link href='/chat'>
													<li className='py-4 text-sm'>Chat</li>
												</Link>
												<Link href='/signin'>
													<li className='py-4 text-sm'>Sign In</li>
												</Link>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
export default NavBar;
