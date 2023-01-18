/** @format */
import React from "react";
import Image from "next/image";
import { useState } from "react";
import NavBar from "/pages/Components/NavBar.jsx";
import { images } from "../next.config";

function cn(...classes) {
	return classes.filter(Boolean).join(" ");
}

export default function Gallery() {
	return (
		<div>
			<NavBar />
			<div className='max-w-2xl mx-auto py 15 px-r sm:py-24 sm:px6 lg:max-w-7xl lg:px-8'>
				<div className='grid gid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8'>
					{/* {images.map((image) => (
			  <yggdrasilImage key={image.id} image={image} /> */}
					)
				</div>
			</div>
		</div>
	);
}

function yggdrasilImage({ image }) {
	const [isLoading, setIsLoading] = useState(true);
	const className = isLoading
		? "grayscale blur-2xl scale-110"
		: "grayscale-0 blur-0 scale-100";
	return (
		<a href='#' className='group'>
			<div className='aspect-w-1 aspect-h-1 xl:aspect-w-7 xl:aspect-h-8 w-full overflow-hidden rounded-lg bg-gray-200'>
				<img
					alt={image}
					src={image.src}
					layout='fill'
					objectFit='cover'
					className={`group-hover:opacity-75 duration-700 ease-in-out ${className}`}
					onLoadingComplete={() => setIsLoading(false)}
				/>
			</div>
			<h3 className='mt-4 text-sm text-gray-700'>Artboard</h3>
			<p className='mt-1 text-lg font-medium text-gray-900'>$35</p>
		</a>
	);
}
<NavBar />;
<Gallery />;
