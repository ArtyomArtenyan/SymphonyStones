import React from 'react';
import { AboutUsSection, WhyPage } from '../../components';

const AboutUs = () => {
	return (
		<div className='my-20 flex flex-col gap-20 px-[240px] max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10  max-w-xl-1024:my-10 max-w-ss-480:px-5 max-w-xl-1024:flex-cols'>
			<AboutUsSection />
			<WhyPage />
		</div>
	);
};

export default AboutUs;
