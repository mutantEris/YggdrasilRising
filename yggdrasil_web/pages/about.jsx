/** @format */

import Image from "next/image";
import Link from "next/link";
import NavBar from "../pages/Components/NavBar.jsx";
// @import url('https://fonts.googleapis.com/css2?family=Skranji&display=swap');

const About = () => {
	return (
		<div className='w-full md:h-screen p-2 flex items-center py-16'>
			<div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
<NavBar />
				<div className='col-span-2'>
					<p></p>
					<h2>How do you play the game?</h2>
					<p>
						There's nothing cooler than building a tree house. That is your goal
						in this VR game. You will explore the world and the various areas
						that surround Yggdrasil, The Legendary World Tree, as you venture to
						make it the home of the biggest, most powerful and epic treehouse of
						all time. Climb up your very own Yggdrasil and find support in its
						mighty limbs to build your foundation so that you may finally begin
						building the greatest treehouse of all time.
					</p>
					<p>
						In the future we would like to implement many new challenges and
						features, including being in explosive battles with other mighty
						trees!
					</p>
				</div>
			</div>
		</div>
	);
};
export default About;
