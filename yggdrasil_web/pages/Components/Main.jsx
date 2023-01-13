/** @format */

import React from "react";

const Main = () => {
	return (
		<div classsName='w-full h-screen text-center'>
			<div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
				<div>
					<p className='uppercase tracking-widest text-white text-4xl font-bold text-center'>
						Welcome to Yggdrasil Rising
					</p>
					<h1 className="py-4 tracking-widest text-3xl font-semibold text-center text-white">
						Would you like to play a{" "}
						<span className='text-white text-center'>
							Game ?
						</span>
					</h1>
				</div>
			</div>
		</div>
	);
};

export default Main;
