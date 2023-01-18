/** @format */

import Head from "next/head";
// import styles from "../styles/globals.css";
import NavBar from "./Components/NavBar";

const images = [
	{
		id: 1,
		url:
			"https://www.istockphoto.com/photo/beautiful-creative-handmade-tree-house-for-kids-in-backyard-of-a-house-outdoors-gm1226284109-361262234?phrase=tree%20houses",
		caption: "Image 1",
	},
	{
		id: 2,
		url:
			"https://www.istockphoto.com/photo/tree-house-gm182035882-19399806?phrase=tree%20houses",
		caption: "Image 2",
	},
	{
		id: 3,
		url:
			"https://www.istockphoto.com/photo/woman-looking-out-window-of-nest-tree-house-gm483597881-483597881?phrase=tree%20houses",
		caption: "Image 3",
	},
	{
		id: 4,
		url:
			"https://www.istockphoto.com/photo/wooden-and-bamboo-house-on-a-big-tree-gm1328975552-412867607?phrase=tree%20houses",
		caption: "Image 4",
	},
];

const Gallery = () => {
	return (
		<div className={styles.container}>
			<NavBar />
			<Head>
				<title>My Gallery</title>
				<link rel='stylesheet' href='/styles.css' />
			</Head>
			<h1 className='text-2xl font-bold mb-4'>Tree House Builds</h1>
			<div className='grid grid-cols-3 gap-4'>
				{images.map((image) => (
					<div key={image.id} className='relative'>
						<img src={image.url} alt={image.caption} className='rounded-lg' />
						<p className='absolute bottom-0 left-0 m-2 text-xs text-white bg-black'>
							{image.caption}
						</p>
					</div>
				))}
			</div>
		</div>
	);
};

export default Gallery;
