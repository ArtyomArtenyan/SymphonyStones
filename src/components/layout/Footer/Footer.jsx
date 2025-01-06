import React from 'react';
import { white_logo } from '../../..';

const Footer = () => {
	return (
		<div>
			<div className='flex flex-col items-center justify-center bg-deepDarkBlue gap-10 px-[240px] py-10 max-w-xl-1024:p-10 max-w-xl-1024:gap-6'>
				<div className='flex flex-col justify-center items-center gap-4'>
					<img src={white_logo} alt='' />
					<p className='text-center font-ArmOmega text-white max-w-xl-1024:text-sm'>
						Սալիկներ, որի հիմքում ընկած է միայն բարձր որակը
					</p>
				</div>
				<div className='flex gap-12 max-w-sm-600:flex-col max-w-sm-600:items-center max-w-sm-600:gap-6'>
					<ul className='flex gap-12 max-w-sm-600:flex-col max-w-sm-600:items-center max-w-sm-600:gap-6'>
						<li className='text-sm text-white'>Գլխավոր</li>
						<li className='text-sm text-white'>Արտադրանք</li>
						<li className='text-sm text-white'>Մեր մասին</li>
						<li className='text-sm text-white'>Կապ</li>
					</ul>
				</div>
				<div className=''>
					<p className='font-ArmOmega text-[28px] text-white max-w-xl-1024:text-2xl'>
						<a href='tel:+374 93220380'>+374 93220380</a>
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;
