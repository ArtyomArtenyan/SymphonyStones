import React from 'react';
import {
	our_Work_Section,
	our_Work_Section_title,
} from '../../../dataBase/data';
import { Dot } from '../../../index.js';

const OurWorkSection = () => {
	return (
		<div className=' flex flex-col gap-10 px-[240px] max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10 max-w-ss-480:px-5 '>
			<div className='flex justify-center items-center gap-3 h-[42px] max-w-xl-1024:h-9'>
				<Dot />
				<h1 className='font-ArmOmega text-[28px] text-primaryDarkBlue leading-none max-w-xl-1024:text-[24px] max-w-ss-480:text-xl'>
					{our_Work_Section_title}
				</h1>
				<Dot />
			</div>
			<div className='grid grid-cols-4 gap-4 max-w-2xl-1440:grid-cols-3 max-w-2xl-1440:gap-3 max-w-sm-600:grid-cols-2 max-w-sm-600:gap-2'>
				{our_Work_Section.map((img, i) => (
					<div
						key={i}
						className=' relative w-full h-[240px] max-w-xl-1024:h-[200px] max-w-ss-480:h-40'
					>
						<img
							className=' absolute w-full h-full top-0 right-0 left-0 bottom-0 object-cover'
							src={img}
							alt='work-img'
						/>
					</div>
				))}
			</div>
		</div>
	);
};

export default OurWorkSection;
