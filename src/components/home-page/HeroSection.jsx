import React from 'react';
import { Button } from '../';
import { Hero_Section } from '../../dataBase/data';

const HeroSection = () => {
	return (
		<div>
			<div className='flex max-w-xl-1024:flex-col mb-20 max-w-xl-1024:mb-10 '>
				<div className='bg-white w-[72%] flex flex-col gap-6 px-16 py-10 max-w-2xl-1440:w-full max-w-sm-600:p-5'>
					<h1 className='font-ArmOmega text-6xl text-primaryDarkBlue leading-none max-w-xl-1024:text-5xl max-w-ss-480:text-4xl'>
						{Hero_Section.title1}
						<br className='block max-w-xl-1024:hidden' />
						{Hero_Section.title2}
					</h1>
					<p className='max-w-xl-1024:text-sm'>{Hero_Section.description}</p>
					<a href='tel:+37493220380'>
						<Button text={Hero_Section.buttonText} color={'primaryLightBlue'} />
					</a>
				</div>
				<div className=' relative w-full h-[480px] max-w-xl-1024:h-[400px] max-w-ss-480:h-[240px]'>
					<img
						className='absolute w-full h-full inset-0 object-cover'
						src={Hero_Section.img}
						alt=''
					/>
				</div>
			</div>
		</div>
	);
};

export default HeroSection;
