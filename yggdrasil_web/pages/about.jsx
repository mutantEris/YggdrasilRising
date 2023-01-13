/** @format */

import React from "react";

const About = () => {
	return (
		<div className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
				<div className='col-span-2'>
					<p>About</p>
					<h2>How do you play the game?</h2>
					<p>
						Yggdrasil Rising is a turn-based strategy game. Each turn, you can
						move your units and attack the enemy. You can also use your units to
						build structures, which will give you more resources and allow you
						to build more units. The goal of the game is to destroy the enemy
						base.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
