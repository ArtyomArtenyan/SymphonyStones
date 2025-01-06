import React from 'react';
import { About_Us_Hero_Section } from '../../../dataBase/data';
import Dot from '../../common/Dot/Dot';

const AboutUsHeroSection = () => {
	return (
		<div>
			<div className=''>
				<div className='flex justify-center items-center gap-3 '>
					<Dot />
					<h1 className='font-ArmOmega text-[28px] text-primaryDarkBlue  max-w-xl-1024:text-[24px] max-w-ss-480:text-xl'>
						{About_Us_Hero_Section.pageName}
					</h1>
					<Dot />
				</div>
			</div>
		</div>
	);
};

export default AboutUsHeroSection;
