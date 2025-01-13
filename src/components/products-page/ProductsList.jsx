import React from 'react';
import { Dot } from '../';

const ProductsList = ({ items }) => {
	return (
		<div>
			<div className='grid grid-cols-3 gap-x-4 gap-y-10 max-w-xl-1024:grid-cols-2 max-w-xl-1024:gap-y-6 max-w-ss-480:grid-cols-1'>
				{items.map(el => (
					<div key={el.id} className='flex flex-col gap-4'>
						<div className=' relative h-[320px]'>
							<img
								className='absolute w-full h-full top-0 right-0 left-0 bottom-0 object-cover'
								src={el.image}
								alt=''
							/>
						</div>
						<p className='text-primaryDarkBlue'>{el.name}</p>
						<div className='flex flex-wrap gap-3 items-center'>
							{Array.isArray(el.size) ? (
								el.size.map((ele, i) => (
									<div key={i} className='flex items-center gap-3'>
										<p>{ele}</p>
										{i !== el.size.length - 1 && <Dot />}
									</div>
								))
							) : (
								<p>{el.size}</p>
							)}
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ProductsList;
