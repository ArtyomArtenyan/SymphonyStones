import React from 'react';
import { Dot } from '../../components/';
import { About_Us_Hero_Section } from '../../dataBase/data';
const AboutUsHeroSection = () => {
	return (
		<div>
			<div className='flex flex-col gap-10'>
				<div className='flex justify-center items-center gap-3 '>
					<Dot />
					<h1 className='font-ArmOmega text-[28px] text-primaryDarkBlue  max-w-xl-1024:text-[24px] max-w-ss-480:text-xl'>
						{About_Us_Hero_Section.pageName}
					</h1>
					<Dot />
				</div>
				<div className='flex bg-white max-w-2xl-1440:flex-col'>
					<div className='relative w-1/2 max-w-2xl-1440:w-full max-w-2xl-1440:h-[400px] max-w-ss-480:h-60'>
						<img
							className='absolute w-full h-full top-0 right-0 left-0 bottom-0 object-cover'
							src={About_Us_Hero_Section.image}
							alt=''
						/>
					</div>
					<div className='flex w-[50%] h-full flex-col gap-3 py-10 px-16 max-w-2xl-1440:w-full max-w-2xl-1440:px-10 max-w-ss-480:p-5'>
						<h1 className='font-ArmOmega text-[28px] text-primaryDarkBlue max-w-xl-1024:text-2xl'>
							Symphony Stone
						</h1>
						<p>{About_Us_Hero_Section.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AboutUsHeroSection;
