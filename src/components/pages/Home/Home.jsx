import React from 'react';
import { Contact_Us_Section } from '../../../dataBase/data';
import {
	ContactUsSection,
	HeroSection,
	OurWorkSection,
	WhySymphonyStoneSection,
} from '../../../index';

const Home = () => {
	return (
		<div>
			<HeroSection />
			<OurWorkSection />
			<WhySymphonyStoneSection />
			<ContactUsSection
				teg={
					<img
						className='absolute w-full h-full inset-0 object-cover'
						src={Contact_Us_Section.img}
						alt=''
					/>
				}
			/>
		</div>
	);
};

export default Home;
