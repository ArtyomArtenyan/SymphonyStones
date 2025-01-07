import React from 'react';
import { CloseIcon } from '../../..';
import { products, productsType } from '../../../dataBase/data';

const FilterModal = ({
	toggleMenu,
	handleSizeSelectClick,
	selectedSizes,
	toggleShow,
	handleClear,
}) => {
	let arr = [];
	for (let i = 0; i < products.length; i++) {
		if (Array.isArray(products[i].size)) {
			for (let j = 0; j < products[i].size.length; j++) {
				if (!arr.includes(products[i].size[j])) arr.push(products[i].size[j]);
			}
		} else {
			if (!arr.includes(products[i].size)) arr.push(products[i].size);
		}
	}

	let filteredArray = arr.filter(el => el);

	return (
		<div>
			<div
				onClick={toggleMenu}
				className='fixed inset-0 z-30 bg-black bg-opacity-50'
			></div>
			<div className='fixed left-1/2 top-1/2 z-40 -translate-y-1/2 -translate-x-1/2 transform'>
				<div className='bg-white flex flex-col w-[500px] p-5 gap-5'>
					<div className='flex items-center justify-between pb-4 border-b'>
						<h1 className='font-ArmOmega text-[28px]'>Ֆիլտր</h1>
						<button onClick={toggleMenu}>
							<img src={CloseIcon} alt='' />
						</button>
					</div>
					<div className='flex gap-2 flex-col'>
						<h1>Տեսակ</h1>
						<div className='flex flex-wrap gap-2'>
							{productsType.map(el => (
								<button
									key={el}
									className='border border-primaryDarkBlue px-5 py-[10px]'
								>
									{el}
								</button>
							))}
						</div>
					</div>
					<div className='flex flex-wrap gap-2 pb-5'>
						<h1>Չափ</h1>
						<div className='flex flex-wrap gap-2'>
							{filteredArray.map((el, i) => (
								<button
									key={i}
									onClick={() => handleSizeSelectClick(el)}
									className={`border border-primaryDarkBlue px-5 py-[10px] ${
										selectedSizes.includes(el)
											? 'bg-primaryDarkBlue text-white'
											: ''
									}`}
								>
									{el}
								</button>
							))}
						</div>
					</div>
					<div className='w-full flex gap-2'>
						<button
							onClick={handleClear}
							className='w-full border border-primaryDarkBlue px-6 py-3'
						>
							Մաքրել
						</button>
						<button
							onClick={toggleShow}
							className='w-full bg-primaryDarkBlue border border-primaryDarkBlue text-white px-6 py-3'
						>
							Ցուցադրել
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FilterModal;
