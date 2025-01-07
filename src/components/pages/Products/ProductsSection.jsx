import React from 'react';
import Dot from '../../common/Dot/Dot';

const ProductsSection = () => {
	return (
		<div className='flex flex-col gap-10'>
			<div className='flex justify-center items-center gap-3 '>
				<Dot />
				<h1 className='font-ArmOmega text-[28px] text-primaryDarkBlue  max-w-xl-1024:text-[24px] max-w-ss-480:text-xl'>
					Արտադրանք
				</h1>
				<Dot />
			</div>
		</div>
	);
};

export default ProductsSection;
