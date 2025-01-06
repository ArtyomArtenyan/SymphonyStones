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
		<div className='px-[240px] my-20 max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10  max-w-xl-1024:my-10 max-w-ss-480:px-5'>
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
