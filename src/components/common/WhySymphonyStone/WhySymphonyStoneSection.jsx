import React from 'react';
import {
	Why_Symphony_Stone_Section,
	Why_Symphony_Stone_Section_title,
} from '../../../dataBase/data';
import Dot from '../Dot/Dot';
import IconsButton from '../IconsButton/IconsButton';

const WhySymphonyStoneSection = () => {
	return (
		<div>
			<div className='px-[240px] my-20 flex flex-col gap-10 max-w-2xl-1440:px-[100px] max-w-xl-1024:px-10  max-w-xl-1024:my-10 max-w-ss-480:px-5 '>
				<div className='flex justify-center items-center gap-3 w-full h-[42px] max-w-xl-1024:h-9'>
					<Dot />
					<h1 className='font-ArmOmega text-[28px] text-center text-primaryDarkBlue leading-none max-w-xl-1024:text-[24px] max-w-ss-480:text-xl'>
						{Why_Symphony_Stone_Section_title}
					</h1>
					<Dot />
				</div>
				<div className='grid grid-cols-3 gap-4 max-w-xl-1024:grid-cols-2 max-w-ss-480:grid-cols-1'>
					{Why_Symphony_Stone_Section.map((ele, i) => (
						<div
							key={ele.id}
							className='flex justify-center items-center flex-col py-10 px-6 bg-white gap-6'
						>
							<IconsButton image={ele.icon} />
							<p className='text-center'>{ele.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default WhySymphonyStoneSection;
