import React from 'react';
import { products, productsType } from '../../../dataBase/data';

const FiltersButtons = ({
	handleSizeSelectClick,
	handleSelectedTypeClick,
	selectedSizes,
	selectedTypes,
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
			<div className='flex gap-2 flex-col'>
				<h1>Տեսակ</h1>
				<div className='flex flex-wrap gap-2'>
					<button
						onClick={() => handleSelectedTypeClick('Բոլորը')}
						className={`border border-primaryDarkBlue ${
							selectedTypes.length === 0 || selectedTypes.includes('Բոլորը')
								? 'bg-primaryDarkBlue text-white'
								: ''
						} px-5 py-[10px] `}
					>
						Բոլորը
					</button>

					{productsType.map(el => (
						<button
							key={el.id}
							onClick={() => handleSelectedTypeClick(el.name)}
							className={`border border-primaryDarkBlue px-5 py-[10px] ${
								selectedTypes.includes(el.name)
									? 'bg-primaryDarkBlue text-white'
									: ''
							}`}
						>
							{el.name}
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
		</div>
	);
};

export default FiltersButtons;
